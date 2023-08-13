import React from "react";
import logo from '../logo.svg';
import Box from '@mui/material/Box';
import SearchBar from "./SearchBar";

import Grid from '@mui/material/Grid';

const ComboSearchHeaderComponent=()=>{

   return (

    <Grid container direction="row" spacing={4}  sx={{width:'80%',ml:'10%', pt:1}}>
         <Grid item>
            <Box sx={{ mt: 5 }}>
              <img src={logo} width={180} />
      
           </Box>
        </Grid>
        <Grid item>

             <SearchBar/>
        </Grid>
      </Grid>
   );

}

export default ComboSearchHeaderComponent;