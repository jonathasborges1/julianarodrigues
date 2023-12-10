import { Grid } from '@mui/material';
import React, { Suspense, lazy } from 'react';

const AppBarCustom = lazy(() => import('../AppBarCustom'))

// const Main = styled('main')(({ theme }) => ({
//    flexGrow: 1,
//    padding: theme.spacing(1),
// }));

interface LayoutProps {
   children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout-container' 
      style={{
        border:"0px solid white",
        display:"flex",justifyContent:"center", justifyItems:"center",
        padding:0,margin:0
      }} 
    >
      
      {/* VERSAO DESKTOP / MOBILE */}
      <Suspense fallback={<div>Sidebar is Loading... . .</div>}>
        <AppBarCustom/>
      </Suspense>

      {/* Conteúdo Principal */}
      <Grid className='layout-conteudo-principal' container sx={{p:0, justifyContent:"center"}} >
        <Grid item xs={12}>{children}</Grid>
      </Grid>

    </div>
  );
};

export default Layout;
