import { useState, useEffect } from 'react';


import SearchComponent from '../components/SearchComponent';
import HeaderComponent from '../components/HeaderComponent';
import HotelComponent from '../components/HotelComponent';
import FooterComponent from '../components/FooterComponent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';

import logo2 from '../logo2.svg';

import { useLocation,useSearchParams,Link } from 'react-router-dom';


const Hotel =()=>{


    const [searchQuery, setSearchQuery]   = useState('');

    const location = useLocation();
    const {hotel} = location.state;

    console.log(hotel);

       return (

        <>
          <Grid container direction="row" spacing={0}  sx={{width:'100%', p:1,background: "linear-gradient(70deg,rgba(66,165,245,1)  10%, 	rgba(66,165,245,1) 70%)"}} >

           <Grid item xs={12} md={3}>
           <Box sx={{ mt: 2,ml:{md:10,sm:'40%',xs:'35%'} }}>
           <Link to="/">
             <img src={logo2} width={130} />
            </Link>

           </Box>
           </Grid>


           <Grid item xs={12} md={9}>

             <Box sx={{ mt: 2 }} >
               <SearchComponent query ={searchQuery} />
  
            </Box>
          </Grid>

         </Grid>


         <Grid container direction="row" spacing={2} sx={{p:5}}>

            <HotelComponent hotel={hotel} detail={true} key={hotel.hotelId}/>
            
         </Grid> 

         <FooterComponent/>

        </>
       )

};



export default Hotel;