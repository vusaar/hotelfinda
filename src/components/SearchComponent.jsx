import React from "react";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


const SearchComponent=()=>{

    return (
        

          <Paper 
          sx={{ p: '1px 20px', display: 'flex', alignItems: 'center', width: '65%',height:65 }}>
            <SearchBar/>
            <Divider orientation="vertical"/>
            <SearchButton/>
          </Paper>
          
        
      );
}

export default SearchComponent;