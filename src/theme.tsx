import '@fontsource/great-vibes';
import '@fontsource-variable/montserrat';

import { PaletteOptions, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Declaração de módulo para adicionar propriedades à PaletteOptions
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom: {
      gold: string;
      color2: string;
      color3: string;
    };
  }
  interface Palette {
    custom: {
      gold: string;
      color2: string;
      color3: string;
    };
  }
}


const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat Variable', sans-serif",
    fontSize: 16,
    h1: {
      fontWeight:700,
      fontSize: '2rem', // Tamanho padrão
      '@media (min-width:0px)': {
        fontSize: '1.75rem', // Para telas small (xs) e maiores
      },
      '@media (min-width:600px)': {
        fontSize: '1rem', // Para telas small (sm) e maiores
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem', // Para telas medium (md) e maiores
      },
      '@media (min-width:1200px)': {
        fontSize: '2.3rem', // Para telas large (lg) e maiores
      },
      '@media (min-width:1536px)': {
        fontSize: '2.6rem', // Para telas extra-large (xl) e maiores
      },
    },
    h3: {
      fontWeight:700,
      fontSize: '2rem', // Tamanho padrão
      '@media (min-width:0px)': {
        fontSize: '1.4rem', // Para telas small (xs) e maiores
      },
      '@media (min-width:600px)': {
        fontSize: '1.45rem', // Para telas small (sm) e maiores
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem', // Para telas medium (md) e maiores
      },
      '@media (min-width:1200px)': {
        fontSize: '1.6rem', // Para telas large (lg) e maiores
      },
      '@media (min-width:1536px)': {
        fontSize: '1.9rem', // Para telas extra-large (xl) e maiores
      },
    },
    body1:{
      fontWeight:300,
      // fontSize: '2rem', // Tamanho padrão
      '@media (min-width:0px)': {
        fontSize: '0.92rem', // Para telas small (xs) e maiores
      },
      '@media (min-width:600px)': {
        fontSize: '1rem', // Para telas small (sm) e maiores
      },
      '@media (min-width:900px)': {
        fontSize: '1rem', // Para telas medium (md) e maiores
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem', // Para telas large (lg) e maiores
      },
      '@media (min-width:1536px)': {
        fontSize: '1.1rem', // Para telas extra-large (xl) e maiores
      },
    }
  },
  palette: {
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    custom: {
      gold: '#FFD700', // Gold
      color2: '#00FF00', // Green
      color3: '#FF00FF', // Magenta
    },
  } as PaletteOptions,
});

export default theme;
