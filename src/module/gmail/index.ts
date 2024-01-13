import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } from "./credentials";

export interface IEmail {
   lead: string;
   from: string,
   to: string,
   subject: string,
   body: string,
   cc?: string[],  
}

export const GMAIL_API_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
export const GMAIL_API_SEND_ENDPOINT = 'https://www.googleapis.com/gmail/v1/users/me/messages/send';

export const createMimeMessage = (email: IEmail): string => {
   const currentTime = new Date().toLocaleString('pt-BR', { 
      timeZone: 'America/Manaus', 
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
   }).replace(',',' às');

   const contentTypeHeader = 'Content-Type: text/html; charset="UTF-8"\r\n';
   const fromHeader = `From: ${email.from}\r\n`;
   const toHeader = `To: ${email.to}\r\n`;
   const ccHeader = email.cc && email.cc.length > 0 ? `Cc: ${email.cc.join(', ')}\r\n` : '';
   const subjectHeader = `Subject: ${"Sistema de Notificação do Gmail - " + email.subject}\r\n\r\n`;

   const bodyEmail = `
      <html>
         <body>
            ${email.body}
            <br><br>
            <b>Lead:</b> ${email.lead}<br>
            <i>Horário de Manaus em ${currentTime}</i><br><br>
            <span style="color: grey;">Esta mensagem foi gerada automaticamente através do serviço Google API - googleapis.com, por favor não responda esta mensagem.</span>
         </body>
      </html>
   `;

   const rawMessage = `${contentTypeHeader}${fromHeader}${toHeader}${ccHeader}${subjectHeader}${bodyEmail}`;
   const base64EncodedMessage = btoa(rawMessage);

   return base64EncodedMessage;
 }

export const sendEmail = async (email: IEmail): Promise<void> => {
   try {
      
      const tokenResponse = await axios.post(GMAIL_API_TOKEN_ENDPOINT, null, {
         params: {
           refresh_token: REFRESH_TOKEN,
           client_id: CLIENT_ID,
           client_secret: CLIENT_SECRET,
           grant_type: 'refresh_token',
         },
       });

      console.log("Token Recebido com sucesso!");
          
      const base64EncodedMessage = createMimeMessage(email);
      console.log("createMimeMessage1: ", base64EncodedMessage);
   
      const body = { raw: base64EncodedMessage, };
      const params = {};
      const headers = {
         Authorization: `Bearer ${tokenResponse.data.access_token}`,
         'Content-Type': 'application/json',
      };
     
      console.log("Enviando Email...",);
      const response = await axios.post(GMAIL_API_SEND_ENDPOINT, body, {headers, params});
      console.log("response: ", response);

     // Verifique se a resposta foi bem-sucedida (status 2xx)
     if (response.status >= 200 && response.status < 300) {
         // A resposta foi bem-sucedida, você pode acessar os dados da resposta se necessário
         console.log('Resposta bem-sucedida:', response.data);
      } else {
         // Trate erros na resposta
         console.error('Erro ao enviar e-mail:', response.status, response.statusText);
         throw new Error(`Erro ao enviar e-mail via API do Gmail:${response.status}`);
      }

   } catch (error) {
      throw new Error(`Erro ao enviar e-mail via API do Gmail: ${error}`);
   }

};

// keywords: gmail api send email javascript
// referencias: https://www.youtube.com/watch?v=-rcRf7yswfM && https://www.labnol.org/google-api-service-account-220405 && CHAT GPT

// Necessario obter CLIENT_ID e CLIENT_SECRET em: https://console.cloud.google.com/projectselector2/apis/credentials
// Necessario obter REFRESH TOKEN apos solicitar autorizacao em: https://developers.google.com/oauthplayground/