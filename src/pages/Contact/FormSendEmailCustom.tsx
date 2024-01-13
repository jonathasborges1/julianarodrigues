import './recaptcha.css';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import * as yup from 'yup';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { CircularProgress, Grid } from '@mui/material';

import TextFieldCustom from '../../components/TextFieldCustom';
import ButtonCustom from '../../components/ButtonCustom';
import ConfigApp from '../../config';

import { EmailGoogleForm, SendEmailWithGoogleForm } from '../../module/googleForm';

interface FormSendEmailCustomProps {
   children?: React.ReactNode;
}

const validationSchema = yup.object({
   email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
   subject: yup.string().max(250, 'O assunto deve ter no máximo 250 caracteres').required('Assunto é obrigatório'),
   message: yup.string().required('Mensagem é obrigatória'),
 });

const FormSendEmailCustom: React.FC<FormSendEmailCustomProps> = ({ children}) => {
   const darkMode = 'true';
   const [loadEmail, setLoadEmail] = useState<boolean>(false);
   const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState<boolean>(false);

   const formik = useFormik({
      initialValues: {
        email: '',
        subject: '',
        message: '',
      },
      validationSchema: validationSchema,
      onSubmit: async (values,action) => {
        console.log("onSubmit values: ",values);
        try {
         setLoadEmail(true);

         if(!isCaptchaSuccessful) throw new Error("Voce deve resolver o recaptcha antes de enviar");
         
         const EmailDataGoogleForm: EmailGoogleForm = {
            email: values.email,
            subject: values.subject,
            message: values.message,
          }
    
          await SendEmailWithGoogleForm(EmailDataGoogleForm);
          
          console.info("Email Enviado com sucesso");
          enqueueSnackbar('Email enviado com sucesso!', { variant: 'success' });
          action.resetForm();
        } catch (error) {
         console.error(`FormSendEmailCustom: ${error}`);
         enqueueSnackbar(`${error}`, { variant: 'error' });
         enqueueSnackbar('Erro ao enviar o Email.', { variant: 'error' });
        } finally{
         setLoadEmail(false);
         setIsCaptchaSuccess(false);
       }
      },
   });
   
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCaptchaChange = (event:any) => {
      setIsCaptchaSuccess(true);
      console.info("captcha value: ", event);
    }

   return (
      <form onSubmit={formik.handleSubmit}>
         <Grid container className='FormSendEmailCustom' sx={{border:"0px solid red",p:{xs:1,lg:2},gap:{xs:3,md:4,lg:3}, textAlign:"center" }}>
            <Grid item xs={12} lg={5.6}>
               <TextFieldCustom
                  fullWidth  
                  id='email'
                  name='email'
                  label='E-mail'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  isdarkmode={darkMode}
               />
            </Grid>
            <Grid item xs={12} lg={5.6}>
               <TextFieldCustom
                  fullWidth
                  id='subject'
                  name='subject'
                  label='Assunto'
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.subject && Boolean(formik.errors.subject)}
                  helperText={formik.touched.subject && formik.errors.subject}
                  isdarkmode={darkMode}
               />
            </Grid>
            <Grid item xs={12}>
            <TextFieldCustom
                  fullWidth  
                  multiline
                  rows={4}
                  id='message'
                  name='message'
                  label='Messagem'
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                  isdarkmode={darkMode}
               />
            </Grid>
            <Grid item xs={12} sx={{display:'flex',justifyContent:"center",border:"0px solid blue"}}>
               <ReCAPTCHA
                  id='recaptcha'
                  size='normal'
                  badge='inline'
                  style={{display:'flex',justifyContent:"center"}}
                  sitekey={ConfigApp.RECAPTCHA_KEY}
                  onChange={(value) => handleCaptchaChange(value)}
               />
            </Grid>
            <Grid item xs={12}>
               
               {loadEmail ? (<CircularProgress/>) 
                  : (<ButtonCustom type="submit" variant="contained" color="primary" sx={{px:"30px"}} >Enviar Mensagem</ButtonCustom>)
               }

            </Grid>
            {children}
         </Grid>
      </form>
   )
}

export default FormSendEmailCustom;