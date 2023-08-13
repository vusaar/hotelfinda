import React, { useState, useEffect, useReducer } from "react";

import Grid from '@mui/material/Grid';

import { useNavigate,useSearchParams,Link } from 'react-router-dom';

import HotelComponent from "./HotelComponent";


const SearchResultsComponent=(props)=>{

  console.log('inside search results ');
  console.log(props);

  const [hotels, setHotels] = useState([])

  useEffect(()=>{

          console.log('inside search results '+props);
          setHotels(props.hotels); 
      
     
  },[hotels]);

    return(

    <Grid container direction="row" spacing={2}  sx={{width:'90%',ml:'5%', pt:1}}>
    {console.log('new hotels-->')}
    {console.log(props.hotels)}

    {
    <>
       {hotels.map(hotel=>(
            <Grid item xs={12} md={6} lg={4}>
              <Link to='/hotel'  state={{hotel:hotel}}>
                 <HotelComponent hotel={hotel} key={hotel.hotelId}/>
              </Link>
              
            </Grid>
          )           
          
      )}
   
   </>
  }
  
  </Grid>

    ) 

}


export default SearchResultsComponent;