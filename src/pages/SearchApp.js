
import { useState, useEffect, useRef } from 'react';

import '../App.css';

import HotelComponent from '../components/HotelComponent';
import FooterComponent from '../components/FooterComponent';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';


import logo2 from '../logo2.svg';

import { useNavigate,useSearchParams,Link } from 'react-router-dom';


import SearchResultsComponent from '../components/SearchResultsComponent'

import SearchComponent from '../components/SearchComponent';

import {fetchData} from '../API';


function SearchApp(){


    const [searchParams] = useSearchParams();

    let new_query = searchParams.get("q");

     const [isSearching,setIsSearching] = useState(true);

     const [hotels,setHotels] = useState([]);

     const [searchQuery, setSearchQuery]   = useState(new_query);

     const tempSearchQuery = useRef(new_query);

     const navigate = useNavigate();

  
    useEffect(()=>{

     //alert('inside use effect '+new_query);

     setSearchQuery(new_query);
         
     doSearch();
     
     },[searchQuery]);



    function doSearch(){
            
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
   
         console.log('hotels found from search query..');
   
         console.log(results);
   
         setHotels(results);
   
         setIsSearching(false);
        
   
     })

    }



  function handleClick(){
     
     // alert('searchApp click event :'+tempSearchQuery.current);

      setIsSearching(true);

      setSearchQuery(tempSearchQuery.current);

      //forceUpdate();

      //doSearch();
      navigate('/search?q='+tempSearchQuery.current);

       //navigate('/');

     
   };


   function handleInputChange(event){
     console.log('change event in searchapp..'+event.target.value);
     //setSearchQuery(event.target.value);
   }


   function updateInputChange(val){

       //alert('updateInputChange '+ val);
       tempSearchQuery.current = val;

   }



     return (

        <div className="SearchApp" sx={{ alignItems: 'center'}}>

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
         <SearchComponent query ={searchQuery}   handleClick={handleClick} updateInputChange={updateInputChange}/>
       
     </Box>
    </Grid>
   
  </Grid>
{!isSearching?
  (<SearchResultsComponent hotels={hotels} />)
  :
  (
    <Box sx={{ width: '100%',marginTop:'2px' }}>
         <LinearProgress />
    </Box>
  )
}


<FooterComponent/>

         </div> 
     )
}


export default SearchApp;