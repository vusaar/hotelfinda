import React from "react";

import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Pool,Wifi,LocalParking,LocalBar,Restaurant,Spa,Verified } from "@mui/icons-material";

import { Skeleton,Box,Grid,LinearProgress,Button,Card,CardActions,CardContent,CardMedia,Typography, Paper } from "@mui/material";

import { useState, useEffect } from 'react';

import { Carousel } from 'antd';

import {postData} from '../API';

const HotelComponent =(props)=>{

     let my_hotel = {name: '',images:[],amenities:[],rating:null};

      const [hotel_data,setHotel_data] = useState(my_hotel);


     useEffect(()=>{

         let post_data = {
          currency: 'USD',
          eapid: 1,
          locale: 'en_US',
          propertyId: props.hotel.hotelId,
          detail:props.detail?props.detail:false
        }

        //  console.log(search_params);return;
        let promise =  postData('https://hotels4.p.rapidapi.com/properties/v2/detail',post_data);

        promise?.then((data)=>{
           
            console.log('hotel data resolved..');
               console.log(data)

               if(data){
               let hname = data['data']['data']['propertyInfo']['summary']['name'];
               let himages = data['data']['data']['propertyInfo']['propertyGallery']['images'];

               let hamenities = data['data']['data']['propertyInfo']['summary']['amenities']['topAmenities']['items'];

               let hrating = data['data']['data']['propertyInfo']['summary']['overview']['propertyRating']['rating'];

               console.log(hname+' rating '+hrating)

               let stars  = []
               let i=0;

              for(i=0; i<hrating; i++){
                  stars.push(<StarBorderIcon sx={{fontSize:'1.1rem'}} key={i}/>)
               }
                
                 setHotel_data({name: hname,images:himages,amenities:hamenities,rating:stars});
               //let img_url = data['url_prefix']+data['data']["'"+props.hotel.hotel_id+"'"][4];

               //console.log('img url--->'+img_url)
               }
        })
         
     },[postData])



     function onCarouselScroll(currentSlide){

         console.log('current slide '+currentSlide);
     }

    return(

         <>
    {!props.detail?(     
    <Card sx={{ width: 345,height:300,m:'1px' }}>

    {hotel_data.images[0]?
      (<CardMedia
        component="img"
        alt="hotel image"
        height="160"
        image={hotel_data?.images[0]['image']['url']}
      />):(
        <Skeleton variant="rectangular" width={345} height={160} />
      )

     }

     
      <CardContent>

        
        <Typography gutterBottom variant="h8" component="div"
         sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
         }}
         >
        
        { hotel_data.name?(
          hotel_data.name
        ):(

          <Skeleton variant="rectangular" width={330} height={20} />
        )}

        </Typography>
             
        <Typography variant="body2" color="text.secondary">
          {props.hotel.hotelAddress.city}
        </Typography>
        
      </CardContent>
      <CardActions>
        
      <Grid item xs={12} md={6}>  
      <Typography sx={{fontSize:'4px', p:'2px', color:'#f542a5'}}>
        {
        hotel_data.rating?(
          hotel_data.rating
        ):(
          <Skeleton variant="rectangular" height={20} />
        )
        }
        </Typography>
        </Grid>
        <Typography variant="body2" color="text.secondary"></Typography>
        <Grid item xs={12} md={6}>
        <Typography sx={{fontSize:'14px', p:'2px', color:'#42A5F5'}}>
           
           {
        hotel_data.rating?(
          <>More</>
        ):(
          <Skeleton variant="rectangular" height={20} />
        )
        }
        </Typography>
        </Grid>
      </CardActions>
    </Card>
    ):(
       <>
       
         <Grid container direction="row" spacing={0}  sx={{width:'100%'}}>

             <Grid item xs={12} md={6}>
               <Paper sx={{p:'5px'}}>
               <Carousel autoplay effect="fade" afterChange={onCarouselScroll}>
                
               

                {hotel_data.images[0]?(

                     hotel_data.images.map(hotel_image=>(
                   
                             
                             <div key={hotel_image['image']['url']}>
                             <Box
                                component='img'
                                 sx={{
                                      maxHeight: '500px',
                                      minWidth: '100%'
                                    }}
                                 alt="hotel"
                              src={hotel_image['image']['url']}
                             >

                           </Box>
                           </div>

                     ))
               ):
                  (
                   <div>
                    <Skeleton variant="rectangular" width={'100%'} height={'100%'} />
                    </div>
                  )

                  }
                

               </Carousel> 
               </Paper>   

             </Grid>

             <Grid item xs={12} md={6} sx={{pl:5}}>
                       
             <Typography gutterBottom variant="h3" component="div"
         sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          color:"rgb(82, 82, 82)"
         }}
         >
        
        { hotel_data.name?(
          hotel_data.name
        ):(

          <Skeleton variant="rectangular" width={730} height={80} />
        )}

        </Typography>
        <Typography variant="body3" color="text.secondary">
          {props.hotel.hotelAddress.city}
        </Typography>

        <Typography sx={{fontSize:'4px', p:'2px', color:'#f542a5'}}>
        {
        hotel_data.rating?(
          hotel_data.rating
        ):(
          <Skeleton variant="rectangular" height={20} />
        )
        }
        </Typography>


        
        <Typography sx={{fontSize:'24px',mt:'30px', p:'1px', color:'rgb(82, 82, 82)'}}>
        <Card  sx={{p:'10px'}}>
          Amenities
          </Card>
          </Typography>
         

          <Grid container direction="row" spacing={2}  sx={{width:'100%',p:'12px'}} >
            {hotel_data.amenities?.map(amenity=>(
              <Grid item md={6} sx={12} >

              
              
              <Paper  sx={{p:'10px'}}>
            <Typography display="inline" sx={{fontSize:'18px', p:'1px', color:'rgba(66,165,245)'}}>
                 {amenity.text=='Pool'?(<Pool/>):
                     (amenity.text=='Bar'?<LocalBar/>:
                     (amenity.text=='Free parking'?(<LocalParking/>):
                     (amenity.text=='Restaurant'?(<Restaurant/>):(<Verified/>))))
                    }
                 </Typography> 
                
    
                <Typography display="inline" sx={{fontSize:'14px', pl:'20px',pb:'20px', color:'rgb(82, 82, 82)'}}>
                   {amenity.text}
               </Typography>
               </Paper>   
              </Grid>
            ))}

           
            </Grid>
           

              
             </Grid>
          </Grid>
       
       </>
    )
    }
         </>
    );

}


export default HotelComponent;