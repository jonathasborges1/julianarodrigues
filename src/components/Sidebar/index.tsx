import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Link } from '@mui/material';

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
            <Grid container sx={{gap:2, border:"0px solid black", display:{xs:"block", md:"flex"}}}>
               {menuList.map((item,index) => {
                  return(
                     <Grid item key={index} sx={{ border:"0px solid red", p:2  }} >
                        <Link href={item.href} 
                           sx={{ 
                              color: "#DAA520", 
                              '&:hover': {borderBottom: '2px solid red', color: "white", }, 
                              padding:1,
                              borderBottom: item.href === activeSection ? '2px solid white' : 'none',
                              borderRadius:1,
                              textDecoration:"none",
                           }} 
                        >
                              {item.label}
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