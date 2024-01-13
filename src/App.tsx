import React from 'react';
import AppRoutes from "./routes/AppRoutes"
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

import theme from './theme';

const App: React.FC = () => {

  return (
    <SnackbarProvider 
      maxSnack={3} // Número máximo de Snackbars que podem ser exibidos ao mesmo tempo
      autoHideDuration={4000} // Duração padrão de 4 segundos
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }} // Posição no canto inferior esquerdo
      preventDuplicate // Evita a exibição de Snackbars duplicados
      dense // Usa uma versão mais compacta do Snackbar
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App

