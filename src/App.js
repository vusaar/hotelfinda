

import { useState, useEffect } from 'react';

import './App.css';
import SearchComponent from './components/SearchComponent';
import HeaderComponent from './components/HeaderComponent';
import HotelComponent from './components/HotelComponent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



import fetchData from './fetchAPI';


function App() {

  const [searchingPromo,setSearchingPromo] = useState(true);
  const [promoHotels,setPromoHotels] = useState([{}]);

    useEffect(()=>{

        //return;
      console.log('calling..');
       let promise =  fetchData();

        promise.then((data)=>{
         console.log('resolved');
        console.log(data);

         let search_id = data.search_id;

       
        const nh = data.result.map((hotel)=>{
            let newHotel = {
              search_id:search_id,
              hotel_id:hotel.hotel_id,
              hotel_name:hotel.hotel_name,
              address : hotel.address,
              city : hotel.city,
              country: hotel.country_trans,
              accommodation_type_name : hotel.accommodation_type_name,
              review_score : hotel.review_score,

            };

             return newHotel;
            
        });

          console.log('new hotels');
        setPromoHotels(nh);
          //console.log(nh);
        

        console.log(promoHotels);

        setSearchingPromo(false);

      })
         
    },[fetchData]);


  return (
    <div className="App" sx={{ alignItems: 'center'}}>
      
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

      <Grid item xs={12} md={12}>
          <HeaderComponent />
       </Grid>
          
        <Grid item xs={12} md={12}  >
          <Divider pb={100}/>
         </Grid>
          

         <Grid item xs={12} md={12} sx={{background: '#F4F4F43', background: "linear-gradient(45deg, #F4F4F4 10%, #F4F4F4 90%)"}} >
           <Box   sx={{ mt: 8 , mb:12, ml:'22%'}} >
             <SearchComponent/>
           </Box>            
          </Grid>

          <Grid item xs={12} md={12}>
          <Divider pb={100}/>
          </Grid>

          {console.log('new hotels-->')}
          {console.log(promoHotels)}

          {!searchingPromo?
          <>(
             {promoHotels.map(hotel=>
                <HotelComponent hotel={hotel} key={hotel.hotel_id}/>
            )}
         )
         </>:'Searching...'
        }
          
          

          
            

         </Grid>
        
      </Box>

    </div>
  );
}

export default App;
