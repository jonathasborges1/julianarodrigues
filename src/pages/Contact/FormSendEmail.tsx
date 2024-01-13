import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useSnackbar } from 'notistack';
import { Button, CircularProgress, Grid } from '@mui/material';

import { EmailGoogleForm, SendEmailWithGoogleForm } from '../../module/googleForm';

import ConfigApp from '../../config';
import { IEmail, sendEmail } from '../../module/gmail';

interface Props {
   children?: React.ReactNode;
}

export const fromDefault = "Juliana Rodrigues Mensagem Automatica <julianasouzarodrigues.adv@gmail.com>";  // O remetente sempre sera o email que foi utilizado para obter o REFRESH_TOKEN
export const toDefault = "Google Service Account BOT - Jonathas Borges <jbc@icomp.ufam.edu.br>";

const FormSendEmail: React.FC<Props> = () => {
   const { enqueueSnackbar } = useSnackbar();
   const [lead, setLead] = useState<string>('')
   const [subject, setSubject] = useState<string>('');
   const [body, setBody] = useState<string>('');
   const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState<boolean>(false);

   const handleLeadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLead(event.target.value);
    } 
  
    const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(event.target.value);
    }
    
    const handleBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBody(event.target.value);
    } 
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCaptchaChange = (event:any) => {
      setIsCaptchaSuccess(true);
      console.info("captcha value: ", event);
    }

    const [loadEmail, setLoadEmail] = useState<boolean>(false);
    const handleSendMessage = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        setLoadEmail(true);
  
        if(!isCaptchaSuccessful) throw new Error("Nao foi possivel Resolver o Recaptcha, tente novamente");
  
        const EmailDataGoogleForm: EmailGoogleForm = {
          email: lead,
          subject: subject,
          message: body,
        }
  
        await SendEmailWithGoogleForm(EmailDataGoogleForm);
        
        console.log("Email Enviado com sucesso");
        enqueueSnackbar('Email enviado com sucesso!', { variant: 'success' });
  
      } catch (error) {
        console.error(`ContactPage: ${error}`);
        enqueueSnackbar(`${error}`, { variant: 'error' });
        enqueueSnackbar('Erro ao enviar o Email.', { variant: 'error' });
  
      }finally{
        setLoadEmail(false);
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSendMessageWithOauth2 = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        setLoadEmail(true);
  
        if(!isCaptchaSuccessful) throw new Error("Nao foi possivel Resolver o Recaptcha, tente novamente");
        
        // o Google Service Account BOT acessa sua conta e envia um email automaticamente como se fosse voce
        // Substituir o "from" com base nas credenciais usadas no momento de obter REFRESH_TOKEN - Ex: "from: nome do proprietario <seu.email@gmail.com>" 
        const emailData: IEmail = {
          lead: lead,
          from: fromDefault, 
          to: toDefault, // Substitua pelo e-mail do destinatário
          cc: [`Lead <${lead}>`,'Suporte Tecnico <jonathasborges0@gmail.com>','Juliana Rodrigues Advogada <julianasouzarodrigues.adv@gmail.com>'],
          subject: subject, //'Assunto do E-mail',
          body: body, // 'Corpo do E-mail',
        }
  
        await sendEmail(emailData);
  
        console.log("Email Enviado com sucesso");
        enqueueSnackbar('Email enviado com sucesso!', { variant: 'success' });
  
      } catch (error) {
        console.error(`ContactPage: ${error}`);
        enqueueSnackbar(`${error}`, { variant: 'error' });
        enqueueSnackbar('Erro ao enviar o Email.', { variant: 'error' });
  
      }finally{
        setLoadEmail(false);
      }
    }


   return (
    <Grid container className='form-send-email' sx={{border:"0px solid red"}}>
      <form onSubmit={handleSendMessage}>
         <label htmlFor="email">Email: </label>
         <input id="email" type="email" value={lead} onChange={handleLeadChange}/>

         <br /><br />
         <label htmlFor="subject">Assunto:</label>
         <input id="subject" type="text" value={subject} onChange={handleSubjectChange}  required/>

         <br /><br />
         <label htmlFor="bodyEmail">Mensagem:</label>
         <textarea id="bodyEmail" value={body} onChange={handleBodyChange} required/>

         <br /><br />
         <ReCAPTCHA
            sitekey={ConfigApp.RECAPTCHA_KEY}
            onChange={(value) => handleCaptchaChange(value)}
         />
         <br />
         {loadEmail ? <CircularProgress/> : <Button variant='contained' type="submit">Enviar</Button>}
      </form>
    </Grid>

   )
}

export default FormSendEmail;


// apenas a versao v2 do recaptcha funciona com client-side, a v3 precisa de verificacao do lado server-side
// fonte para uso do recaptcha: https://hackernoon.com/how-to-set-up-recaptcha-in-your-react-application