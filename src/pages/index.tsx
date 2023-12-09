import React, { lazy, Suspense } from 'react';

import { Grid } from '@mui/material';

import Layout from '../components/Layout';

import Home from './Home';

// import About from './About';
const About = lazy(() => import('./About'));

// import Service from './Service';
const Service = lazy(() => import('./Service'));

import Footer from '../components/Footer';

interface SinglePageApplicationProps {
   children?: React.ReactNode;
}

const SinglePageApplication: React.FC<SinglePageApplicationProps> = () => {
   return (
      <Layout>
         <Grid container className='SinglePageApplication' sx={{p:0, gap:0, justifyContent:"center", border:"0px solid red"}} > {/* Precisa ser padding 0 */}
            
            <Grid item xs={12} sx={{display:"",border:"0px solid red"}} > <Home/> </Grid>

            <Grid item xs={12} sx={{display:"", border:"0px solid red"}}> 
   
               <Suspense fallback={<div>Loading...</div>}>
                  {/* Render the lazily loaded component */}
                  <About />
               </Suspense>

            </Grid>

            <Grid item className={"SinglePageApplication-item-Service"} xs={12}> 
               <Suspense fallback={<div>Loading...</div>}>
                     {/* Render the lazily loaded component */}
                  <Service/> 
               </Suspense>
            </Grid>

            <Grid item xs={12}> <Footer/> </Grid>

         </Grid>
  
      </Layout>
   )
}

export default SinglePageApplication;