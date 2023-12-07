import React from 'react';
// import { styled } from '@mui/system';
import { useTheme } from '@mui/system';

// import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import Sidebar from '../Sidebar';
import { Grid, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// const Main = styled('main')(({ theme }) => ({
//    flexGrow: 1,
//    padding: theme.spacing(1),
// }));

interface LayoutProps {
   children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className='layout-container' style={{display:"flex",justifyContent:"center", justifyItems:"center", border:"0px solid white",padding:0,margin:0}} >

      {/* AppBar (Desktop) */}
      <AppBar className='AppBar-do-jhon' position="fixed" sx={{background:"rgba(0,0,0,0.6)",border:"0px solid blue"}} >
        <Toolbar className='Toolbar-do-jhon' >
          <Grid className='Toolbar-Grid-container' container sx={{ justifyContent:{xs:"center", md:"space-between"}, textAlign:"center", }}>
            
            {/* LOGOTIPO */}
            <Grid item sx={{border:"0px solid red"}} >
              <Typography variant="h6" sx={{border:"0px solid red",p:0,m:0 ,fontFamily: "'Great Vibes', cursive;", letterSpacing:"3px",color:"#BF985B" }}>
                  Juliana Rodrigues
              </Typography>
              <Typography variant='h6' sx={{border:"0px solid red",fontSize:"10px",letterSpacing:"6px",m:-1}}>
                ADVOGADA 
              </Typography>
              {/* <Typography variant='h6' sx={{fontSize:"8px",letterSpacing:"0px",pt:2}}>
                OAB-10547 
              </Typography> */}

            </Grid>

            <Grid item sx={{border:"0px solid blue"}}>
{/*  VERSAO DESKTOP  */}
              <Hidden mdDown>  
                <Sidebar />
              </Hidden>
            </Grid>
          </Grid>
          
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' }, "&:focus":{outline:"0px solid yellow"}  }}
          >
            <MenuIcon sx={{border:"0px solid yellow"}} />
            
          </IconButton>

        </Toolbar>
      </AppBar> 

{/*  VERSAO MOBILE  */}
      {/* Drawer (Mobile) */}
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={
            {
              sx:{background:"rgba(0,0,0,0.6)"},
              tabIndex: -1  // Adicione esta linha para remover o foco
            }
          }

        >
          <Sidebar/>
        </Drawer>
      </Hidden>

      {/* Conteúdo Principal */}
      <Grid className='layout-conteudo-principal' container sx={{p:0, justifyContent:"center"}} >
        <Grid item xs={12}>{children}</Grid>
      </Grid>

    </div>
  );
};

export default Layout;
