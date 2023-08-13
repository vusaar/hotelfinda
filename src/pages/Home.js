

import { useState, useEffect } from 'react';


import SearchComponent from '../components/SearchComponent';
import HeaderComponent from '../components/HeaderComponent';
import HotelComponent from '../components/HotelComponent';
import FooterComponent from '../components/FooterComponent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';


import SearchResultsComponent from '../components/SearchResultsComponent'


import {fetchData} from '../API';


const Home=()=> {

  const [isSearching,setIsSearching] = useState(true);
  const [hotels,setHotels] = useState([]);

  const [searchQuery, setSearchQuery]   = useState('Victoria falls');


  useEffect(()=>{

  let search_params = {
    q: searchQuery,
    locale: 'en_US',
    langid: '1033'
  }

  let promise =  fetchData('https://hotels4.p.rapidapi.com/locations/v3/search',search_params);

   promise.then((data)=>{
   console.log('resolved');
   console.log(data);

   const results = data.data.sr.filter((hotel)=>{
        
         //console.log(hotel);
         if(hotel.type==='HOTEL')
            return hotel;
       
   });

     console.log('hotels found from home query..');

     console.log(results);

     setHotels(results);

     setIsSearching(false);
    

 })

    
    
    },[searchQuery]);



  return (
    <div className="Home" sx={{ alignItems: 'center'}}>
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

      <Grid item xs={12} md={12} sx={{ml: '40%'}}>
          <HeaderComponent />
       </Grid>
          
        <Grid item xs={12} md={12}  >
          <Divider pb={100}/>
         </Grid>
          

         <Grid item xs={12} md={12} sx={{background: '#F4F4F43', background: "linear-gradient(70deg,rgba(66,165,245,1)  10%, 	 rgba(66,165,245,1) 70%)"}} >
           <Box   sx={{ mt: 8 , mb:12, ml:{md:30,sm:'2%',xs:'1%'}}} >
             <SearchComponent query ={searchQuery} />
           </Box>            
          </Grid>

          <Grid item xs={12} md={12}>
         
          </Grid>

         </Grid>
        
      </Box>

      {!isSearching?
  (<SearchResultsComponent hotels={hotels} />)
  :
  (
    <Box sx={{ width: '100%',marginTop:'20px' }}>
         <LinearProgress />
    </Box>
  )
}

 
    <FooterComponent/>
      
     
    </div>
  );
};

export default Home;
