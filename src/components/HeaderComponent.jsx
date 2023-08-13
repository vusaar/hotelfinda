import React from "react";
import logo from '../logo.svg';
import {Box,Grid} from '@mui/material/';


const HeaderComponent=()=>{

   return (
    <Grid container sx={{ mt:2}} >

      <Grid item xs={12} md={12}>
         
       <Box sx={{width:'100%',ml:'-15px'}}>
       <img src={logo} width={'95vw'} />
      </Box>  
      

      </Grid>
      
      </Grid>
   );

}

export default HeaderComponent;