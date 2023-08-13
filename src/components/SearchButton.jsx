import React from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const SearchButton = (props) =>{

    
    return (<IconButton type="button" sx={{ pl: 2,pr:2,m:0, fontSize: '80px'}} >
             <SearchIcon />
            </IconButton>);
}


export default SearchButton;
  