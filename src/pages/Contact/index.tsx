import './style-contact.css';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import gmailBackground from '../../assets/gmail-background-fale-conosco-juliana-rodrigues.png';

// import FormSendEmail from './FormSendEmail';
import Title from '../../components/Title';
import FormSendEmailCustom from './FormSendEmailCustom';
import { GmailIcon, LocationIcon, ScheduleIcon, WhatsappIcon } from '../../components/Icons';

interface ContactProps {
   children?: React.ReactNode;
}

const Contact: React.FC<ContactProps> = () => {

  const warnBoard = [
    {
      icon: <GmailIcon></GmailIcon>,
      title: "E-mail",
      subTitle: "julianasouzarodrigues.adv@gmail.com",
    },
    {
      icon: <WhatsappIcon></WhatsappIcon>,
      title: "Numero Telefone com Whatsapp",
      subTitle: "+55 92 98230 1415",
    },
    {
      icon: <ScheduleIcon></ScheduleIcon>,
      title: "Horário de Atendimento",
      subTitle: "Segunda a Sabado das 08:00 as 18:00",
    }, 
    {
      icon: <LocationIcon></LocationIcon>,
      title: "Endereço Físico",
      subTitle: "R. Salvador, 120 - Adrianópolis, Manaus - AM, 69057-040 - Vieiralves Business Center",
    }, 
  ]

   return (
      <Grid container id={"contato"} sx={{border:"0px solid red", pt:10, justifyContent:"center", alignItems:"flex-start", textAlign:"center", gap:{xs:3,lg:2}, p:{xs:1,lg:7} }}>

        <Grid item xs={11.5} lg={11.5}>
          <Title>Fale Conosco</Title>
        </Grid>

         <Grid item xs={11.5} lg={5}>
            <Grid container className='warn-board' sx={{border:"0px solid blue", visibility:"" , height:{xs:"450px",lg:"500px"}, gap:{xs:2,lg:3}, p:{xs:2,lg:4} }}>
              
              <Grid item xs={11}>
                <Typography variant={"h3"}>Quadro De Informação para Contato</Typography>
              </Grid>
              
              {warnBoard.map((item, index) => {
                return(
                  <Grid item xs={10} lg={12} key={index} sx={{color:"0px solid red", zIndex:2}} >
                    <Grid container sx={{ border:"0px solid white", gap:{xs:1.5}, alignItems:"center"  }}>
                      <Grid item sx={{border:"0px solid yellow"}}>{item.icon}</Grid>
                      <Grid item xs={10}>
                        <Grid container sx={{ border:"0px solid red",textAlign:"left", gap:0.2 }} >
                          <Grid item xs={12}><Typography variant='body1' sx={{color:"#AFAFAF"}} >{item.title}</Typography> </Grid>
                          <Grid item xs={12}><Typography variant='body1' sx={{fontWeight:500}} >{item.subTitle}</Typography></Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              })}

              <Grid item className='gmail-background' sx={{textAlign:"right", }}>
                <Grid container sx={{justifyContent:"right",alignItems:"end", height:"inherit" }} >
                  <Grid item sx={{opacity:{xs:0.4,lg:0.8}}}> 
                    <img src={gmailBackground} alt="gmail-background-fale-conosco-juliana-rodrigues" />
                  </Grid>
                </Grid>
                
              </Grid>

            </Grid>
         </Grid>

         <Grid item xs={11.5} lg={5.5}>
          <Grid container className='form-container' sx={{border:"0px solid white", textAlign:"center",justifyContent:"center", gap:{xs:2,lg:3}, p:{xs:2,lg:4} }}>
            
            <Grid item xs={12}>
              <Typography variant={"h3"}>Fomulario de Contato</Typography>
            </Grid>

            <Grid item xs={12}>
              {/* <FormSendEmail/> */}
              <FormSendEmailCustom></FormSendEmailCustom>
            </Grid>
          </Grid>
         </Grid>
      </Grid>
   )
}

export default Contact;

