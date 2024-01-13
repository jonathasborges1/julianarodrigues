const ConfigApp = {
   RECAPTCHA_KEY: import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? "6Lda30cpAAAAAHBjRWapooRLO72rh83_VbbKevnf",
   CLIENT_SECRET: import.meta.env.VITE_CLIENTE_SECRET ?? "",
   REFRESH_TOKEN: import.meta.env.VITE_REFRESH_TOKEN ?? "",
   REFRESH_TOKEN_DO_JHON: import.meta.env.VITE_REFRESH_TOKEN_DO_JHON ?? "",
}

export default ConfigApp