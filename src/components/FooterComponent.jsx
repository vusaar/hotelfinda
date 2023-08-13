
import React from "react";
import logo from '../logo.svg';
import {Box,Paper,Grid} from '@mui/material/';
import { Typography } from "antd";

const FooterComponent=()=>{


       return(
        <>
          
          <Grid sx={{p:'10px',bottom: 0,textAlign:"center",color:'gray',width: '100%',position: 'relative',marginTop:'50px'}}>
          <hr/>
               <Typography sx={{color:'gray'}}>
               React JS | apidojo API | vusaar@gmail.com
               </Typography>
               <Typography sx={{color:'gray'}}>
                  &#169; 2023
               </Typography>
            </Grid>
          
        </>
       )
}


export default FooterComponent;