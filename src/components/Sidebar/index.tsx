import React, { useEffect, useMemo, useState } from 'react';
import { Divider, Grid, Link, Typography } from '@mui/material';

const Sidebar: React.FC = () => {

   const [activeSection, setActiveSection] = useState<string | null>(window.location.hash || "#home");

   const menuList = useMemo(() => {
      return [
         {
            label: "Página Inicial",
            href: "#home"
         },
         {
            label: "Quem sou",
            href: "#about"
         },
         {
            label: "Área de atuação",
            href: "#service"
         },
         {
            label: "Escritorio",
            href: "#escritorio"
         },
         {
            label: "Links",
            href: "#links"
         },
         {
            label: "Contato",
            href: "#contato"
         },
      ]
   },[]);

   useEffect(() => {
      const handleScroll = () => {
         const sections = menuList.map(item => document.getElementById(item.href.substring(1)));
         const scrollPosition = window.scrollY;

         for (let i = sections.length - 1; i >= 0; i--) {
            if (sections[i] && scrollPosition >= sections[i]!.offsetTop - 1) {
               setActiveSection(menuList[i].href);
               break;
            }
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [menuList]);

   return(
      <header style={{border:"0px solid red"}}>
         <nav style={{border:"0px solid blue"}}>
            <Grid container className={"sidebar-container"} sx={{gap:1, border:"0px solid white", display:{xs:"block", sm:"flex"}, pr:{lg:2}  }}>
               {menuList.map((item,index) => {
                  return(
                     <Grid item key={index} sx={{ border:"0px solid red", p:"0px 0px",  }} >
                        <Link href={item.href} 
                           sx={{ 
                              color: "#DAA520", 
                              lineHeight:"0px",
                              textDecoration:"none",
                           }} 
                        >
                           <Grid container sx={{gap:{xs:0,md:0}, p:{xs:"16px 0px",md:0} ,justifyContent:"center", border:"0px solid red", textAlign:"center"}} >
                              
                              <Grid item xs={12} sx={{border:"0px solid red",p:0,m:0}}>
                                 <Typography variant='body2' 
                                    sx={{
                                       fontSize:"0.9rem",
                                       p:{xs:0.5,md:0},m:0, lineHeight:"30px",
                                       border:"0px solid white",
                                       '&:hover': {color: "white", }, 
                                    }} 
                                 >
                                    {item.label}
                                 </Typography>
                              </Grid>

                              <Grid item sx={{border:"0px solid blue",}}>
                                 <Divider 
                                    sx={{ 
                                       width:{xs:"50px"}, lineHeight:"0px", 
                                       borderBottom: item.href === activeSection ? '2px solid white' : 'none',
                                    }} 
                                 />
                              </Grid>
                           </Grid>
                        </Link>
                     </Grid>
                  )
               })}
            </Grid>
         </nav>
      </header>
   )

};

export default Sidebar;