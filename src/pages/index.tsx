import React  from 'react';

import { Grid } from '@mui/material';

import Layout from '../components/Layout';

import Home from './Home';

import About from './About';

import Service from './Service';

import Footer from '../components/Footer';
import Maps from './Maps';
import Links from './Links';

interface SinglePageApplicationProps {
   children?: React.ReactNode;
}

const SinglePageApplication: React.FC<SinglePageApplicationProps> = () => {

   const diplayDefault = ""

   const SPA = [
      {
         section: <Home/>,
         display:diplayDefault,
      },
      {
         section: <About/>,
         display:diplayDefault,
      },
      {
         section: <Service/>,
         display:diplayDefault,
      },
      {
         section: <Maps/>,
         display:"",
      },
      {
         section: <Links/>,
         display:"",
      },
      {
         section: <Footer/>,
         display:diplayDefault,
      },
   ]

   return (
      <Layout>
         <Grid container className='SinglePageApplication' sx={{ border:"0px solid red", p:0, gap:0, justifyContent:"center",}} > {/* Precisa ser padding 0 */}
            {SPA.map((item,index) => (<Grid item xs={12} key={index} sx={{display:item.display}} >{item.section}</Grid>))}
         </Grid>
      </Layout>
   )
}

export default SinglePageApplication;