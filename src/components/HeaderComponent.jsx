import React from "react";
import logo from '../logo.svg';
import Box from '@mui/material/Box';


const HeaderComponent=()=>{

   return (
    <Box sx={{ mt: 5,justifyContent: 'center'}}>
      <img src={logo} width={180} />
      
      </Box>
   );

}

export default HeaderComponent;