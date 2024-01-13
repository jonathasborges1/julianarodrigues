import React from 'react';
import { useTheme } from '@mui/system';

import { Grid, IconButton, Typography, Toolbar, AppBar, Drawer, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Sidebar';

interface AppBarCustomProps {
   children?: React.ReactNode;
}

const AppBarCustom: React.FC<AppBarCustomProps> = ({ ...props }) => {

   const theme = useTheme();
   const [mobileOpen, setMobileOpen] = React.useState(false);

   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen);
   };

   return (
      <AppBar className='AppBar-do-jhon' position="fixed" sx={{background:"rgba(0,0,0,0.6)",border:"0px solid blue"}} {...props}>
        <Toolbar className='Toolbar-do-jhon' >

          <Grid className='Toolbar-Grid-container' container sx={{ border:"0px solid red" , justifyContent:{xs:"center", md:"space-between"}, textAlign:"center", }}>
            
            {/* LOGOTIPO */}
            <Grid item xs={11} sm={11} md={3} lg={3} xl={2} sx={{border:"0px solid red"}} >
              <Typography variant="h6" sx={{border:"0px solid red",p:0,m:0 ,fontFamily: "'Great Vibes', cursive;", letterSpacing:"3px",color:"#BF985B" }}>
                  Juliana Rodrigues
              </Typography>
              <Typography variant='h6' sx={{border:"0px solid red",fontSize:"10px",letterSpacing:"6px",m:-1}}>
                ADVOGADA 
              </Typography>

            </Grid>

            <Grid item xs={1} sm={1} md={8} lg={8} xl={7} sx={{border:"0px solid blue", display:"flex", justifyContent:"end"}}>
              
              {/*  VERSAO DESKTOP  */}
              <Hidden mdDown>  
                <Sidebar />
              </Hidden>

  {/*  VERSAO MOBILE  */}
              {/* Drawer (Mobile) */}
              <Hidden lgUp implementation="css">
                  <IconButton
                    color="inherit"
                    aria-label="open menu"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { xs: 'block', md: 'none' }, "&:focus":{outline:"0px solid yellow"}  }}
                  >
                    <MenuIcon sx={{border:"0px solid yellow"}} /> 
                  </IconButton>
                
                  <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={
                      {
                        sx:{background:"rgba(0,0,0,0.6)"},
                        tabIndex: -1,  // Adicione esta linha para remover o foco
                        border:"0px solid red"
                      }
                    }
                  >
                    <Sidebar/>
                  </Drawer>

              </Hidden>

            </Grid>

          </Grid>
          
        </Toolbar>
      </AppBar>  
   )
}

export default AppBarCustom;