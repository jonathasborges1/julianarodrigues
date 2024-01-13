
const ACTION_URL_GOOGLE_APP_SCRIPT_JU = "https://script.google.com/macros/s/AKfycbyKBCPLwWX1de4JJzPSW82fczeluNLCi1JRYHQ28NpPVTMWHdZ1pTOUSw9_JEVA1G9y/exec";

export interface EmailGoogleForm{
   email: string;
   subject: string;
   message :string;
}

// A submissao diretamente para o script.google.com (Google App Script - GAS) nao gera problemas de CORS (Access-Control-Allow-Origin)
export const SendEmailWithGoogleForm = async (form: EmailGoogleForm): Promise<void> => {
   try {

      const response =  await fetch(ACTION_URL_GOOGLE_APP_SCRIPT_JU, {
         redirect: "follow",
         method: "POST",
         body: JSON.stringify(form),
         // obs: enviar objetos com 'Content-Type': 'application/json' aciona o blocked by CORS policy
         headers: {
           "Content-Type": "text/plain;charset=utf-8",
         },
       })

      // Log do conteúdo do corpo da resposta
      const responseBody = await response.text();
      console.info("SendEmailWithGoogleForm > responseBody: ", responseBody);

      const responseJSON: {message:string,status:number} = JSON.parse(responseBody);

      if(responseJSON?.status === 200){
         return;
       }else{
         throw new Error(`${response.status}`);
       }

   } catch (error) {
      console.error(`SendEmailWithGoogleForm: ${error}`);
      throw new Error(`SendEmailWithGoogleForm: ${error}`);
   }
}

// A submissao direta para o docs.google.com NAO FUNCIONA, pois gera problemas de CORS (Access-Control-Allow-Origin)
// Para fazer req direto ao docs sera necessario uso de PROXY para contonar problemas de CORS
// Ex: https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeM2D6hiCJRbNHjGxV8wrcJvpkds9QEEigF9dQ8E2KGmMx2sg/formResponse
export const SendEmailWithGoogleForm2 = async (form: EmailGoogleForm): Promise<void> => {
   try {
      const ACTION_URL_DOCS_GOOGLE = "https://docs.google.com/forms/d/e/1FAIpQLSeM2D6hiCJRbNHjGxV8wrcJvpkds9QEEigF9dQ8E2KGmMx2sg/formResponse";

      const EMAIL_ID   = "entry.1875927540";
      const SUBJECT_ID = "entry.787410159";
      const MESSAGE_ID = "entry.248112392";  

      const formData = new FormData();
      formData.append(EMAIL_ID, form.email);
      formData.append(SUBJECT_ID, form.subject);
      formData.append(MESSAGE_ID, form.message);

      const response =  await fetch(ACTION_URL_DOCS_GOOGLE, {
         redirect: "follow",
         method: "POST",
         body: formData,
         // obs: o headers nao pode ser especificado quando usar fetch, configurar manualmente esse cabeçalho pode interferir no processo.
         headers: {
            'Content-Type': 'text/plain'
            // 'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/x-www-form-urlencoded'
         },
       })

      console.info("SendEmailWithGoogleForm > response ", response);

       if(response.ok){
         return;
       }else{
         throw new Error(`${response.status}`);
       }

   } catch (error) {
      console.error(`SendEmailWithGoogleForm: ${error}`);
      throw new Error(`SendEmailWithGoogleForm: ${error}`);
   }
}


{/*
   Necessario criar formulario no googleForms e extrair o ID do formulario Ex: "1FAIpQLSeM2D6hiCJRbNHjGxV8wrcJvpkds9QEEigF9dQ8E2KGmMx2sg"
   Necessario extrair id de cada field do formulario Ex: "entry.1875927540"
   
   referencias: 
      - https://medium.com/swlh/creating-a-backend-less-contact-form-using-google-forms-852157dcbdbb
      - https://medium.com/bridgedxyz/cors-anywhere-for-everyone-free-reliable-cors-proxy-service-73507192714e

      1. You can use some CORS-proxies that I've found
         I am sure that they might go down pretty soon, but they are ok to overcome CORS.
         https://scrappy-php.herokuapp.com/?url=
         https://api.allorigins.win/raw?url=
         https://cors-get-proxy.sirjosh.workers.dev/?url=
         https://secret-ocean-49799.herokuapp.com/
         https://cors.eu.org/
         https://cors-proxy.tk/?url=

         // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; // [parou de funcionar][11/01/2024]
         // const CORS_PROXY = "https://cors.bridged.cc/"; 
         // const CORS_PROXY = "https://cors-server.fly.dev/"; 
         // const CORS_PROXY = "https://cors.eu.org/";

         fonte: https://github.com/Rob--W/cors-anywhere/issues/301      
*/}