import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const HotelComponent =(props)=>{

    return(

         <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="hotel image"
        height="140"
        image="./logo.svg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.hotel.hotel_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.hotel.city} {props.hotel.country}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         </>
    );

}


export default HotelComponent;