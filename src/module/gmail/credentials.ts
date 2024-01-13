import ConfigApp from '../../config';

const CLIENT_ID = "720013591009-5o3etvmkjpi45a79lc9icspjcbsdv9j6.apps.googleusercontent.com";
const CLIENT_SECRET = ConfigApp.CLIENT_SECRET;
// const REFRESH_TOKEN = ConfigApp.REFRESH_TOKEN_DO_JHON // // TOKEN DO JHON
const REFRESH_TOKEN = ConfigApp.REFRESH_TOKEN // TOKEN DO JU
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const SCOPES = 'https://www.googleapis.com/auth/gmail.send';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
const API_KEY = ""

console.log("ConfigApp.REFRESH_TOKEN: ", ConfigApp.REFRESH_TOKEN)
console.log("ConfigApp.CLIENT_SECRET: ", ConfigApp.CLIENT_SECRET)



export { CLIENT_ID, CLIENT_SECRET , REFRESH_TOKEN, REDIRECT_URI, SCOPES, DISCOVERY_DOCS, API_KEY };