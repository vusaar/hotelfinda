import axios from 'axios';


const fetchData=async()=>{
    const options = {
      method: 'GET',
      url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list',
      params: {
        offset: '0',
        arrival_date: '2023-07-24',
        departure_date: '2023-07-27',
        guest_qty: '1',
        dest_ids: '-2323247',
        room_qty: '1',
        search_type: 'city',
        children_qty: '2',
        children_age: '5,7',
        search_id: 'none',
        price_filter_currencycode: 'USD',
        order_by: 'popularity',
        languagecode: 'en-us',
        travel_purpose: 'business'
      },
      headers: {
        'X-RapidAPI-Key':'a00c0a0c40mshbbba701edb4ca57p16ba3ejsn9e17e5e4fdec',//'366f8a7cf2mshce60bc3e5f66ad3p130494jsn4b39d1b16f04', //'333f2ec9e1msh4b8e199f254fd3dp18420bjsndaf7c881b06c',
        'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      //console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };



  export default fetchData;