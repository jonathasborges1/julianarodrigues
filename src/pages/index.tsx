import React  from 'react';

import { Grid } from '@mui/material';

import Layout from '../components/Layout';

import Home from './Home';

import About from './About';

import Service from './Service';

import Footer from '../components/Footer';
import Maps from './Maps';

interface SinglePageApplicationProps {
   children?: React.ReactNode;
}

const SinglePageApplication: React.FC<SinglePageApplicationProps> = () => {
   return (
      <Layout>
         <Grid container className='SinglePageApplication' sx={{p:0, gap:0, justifyContent:"center", border:"0px solid red"}} > {/* Precisa ser padding 0 */}
            
            <Grid item xs={12} sx={{display:"",border:"0px solid red"}} > 
               <Home />
            </Grid>

            <Grid item xs={12} sx={{display:"", border:"0px solid red"}}> 
               <About />
            </Grid>

            <Grid item xs={12} className={"SinglePageApplication-item-Service"}> 
               <Service/>
            </Grid>

            <Grid item xs={12} className={"SinglePageApplication-item-Maps"}>
               <Maps/>
            </Grid>

            <Grid item xs={12}>
               <Footer/> 
            </Grid>

         </Grid>
      </Layout>
   )
}

export default SinglePageApplication;