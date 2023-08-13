import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import InputBase from '@mui/material/InputBase';

import { useState, useEffect } from 'react';

import { useNavigate,useLocation,useSearchParams } from 'react-router-dom';

import {fetchData} from '../API';


const SearchComponent=(props)=>{

 
    const [searchQuery,setSearchQuery] = useState(props.query);

    let navigate = useNavigate();

     useEffect(()=>{

      setSearchQuery(searchQuery);   
      
     
     },[searchQuery]);





  function handleClick(){
     
     console.log('SearchComponent click: '+searchQuery);

     props.updateInputChange?props.updateInputChange(searchQuery):setSearchQuery(searchQuery)

     navigate('/search?q='+searchQuery);
     
   };


   function handleInputChange(event){
     console.log(event.target.value);

     //setSearchQuery(event.target.value);

     if(props.updateInputChange){

        props.updateInputChange(event.target.value);
     }
     

     setSearchQuery(event.target.value);
      
     
   }


    return (
        
          <Paper 
          sx={{ p: '1px 20px', display: 'flex', alignItems: 'center', width:{sm:'93%',md:'65%'},height:65 }}>
            
            <>
              <InputBase sx={{ width: '100%'}} id="standard-basic" label="Search..." variant="standard" onChange={handleInputChange} value={searchQuery}/>
            </>

            <Divider orientation="vertical"/>
            
            <>
            <IconButton type="button" sx={{ pl: 2,pr:2,m:0, fontSize: '80px'}} onClick={props.handleClick?props.handleClick:handleClick} >
             <SearchIcon />
            </IconButton>
            </>
          </Paper>
          
        
      );
}

export default SearchComponent;