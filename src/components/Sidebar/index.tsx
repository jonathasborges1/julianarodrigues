import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Link, Typography } from '@mui/material';

const Sidebar: React.FC = () => {

   const [activeSection, setActiveSection] = useState<string | null>(window.location.hash || "#home");
   console.log("activeSection: ",activeSection)

   const menuList = useMemo(() =>{
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
            <Grid container sx={{gap:5, border:"0px solid white", display:{xs:"block", md:"flex"}, pr:{lg:2}  }}>
               {menuList.map((item,index) => {
                  return(
                     <Grid item key={index} sx={{ border:"0px solid red", p:"0px 0px",    }} >
                        <Link href={item.href} 
                           sx={{ 
                              color: "#DAA520", 
                              
                              // padding:0.4,
                              borderRadius:1,
                              
                              textDecoration:"none",
                           }} 
                        >
                           <Typography variant='body2' 
                              sx={{
                                 fontSize:"0.9rem",
                                 p:0,m:0, lineHeight:"30px",
         
                                 // '&:hover': {borderBottom: '2px solid red', color: "white", }, 
                                 borderBottom: item.href === activeSection ? '2px solid white' : 'none',
                                 // border:"1px solid blue",
                                 // padding:"10px 0px",
                              }} 
                           >
                              {item.label}
                           </Typography>
       
                             
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