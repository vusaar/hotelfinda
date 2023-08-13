import axios from 'axios';


const fetchData= async(end_point,search_params)=>{
    const options = {
      method: 'GET',
      url: end_point,
      params: search_params,
      headers: {
        'X-RapidAPI-Key': /*'fbd6e11e25mshe4c2e25364647e6p106de7jsn28bf4b84a22a','366f8a7cf2mshce60bc3e5f66ad3p130494jsn4b39d1b16f04',*/'a00c0a0c40mshbbba701edb4ca57p16ba3ejsn9e17e5e4fdec',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      //console.log(response);


      return response;
    } catch (error) {
      console.error(error);
    }
  };


  const postData =async(end_point,post_data)=>{

    const options = {
      method: 'POST',
      url: end_point,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': /*'fbd6e11e25mshe4c2e25364647e6p106de7jsn28bf4b84a22a','366f8a7cf2mshce60bc3e5f66ad3p130494jsn4b39d1b16f04', */'a00c0a0c40mshbbba701edb4ca57p16ba3ejsn9e17e5e4fdec',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      },
      data: post_data
    };
    
    try {
      const response = await axios.request(options);
      
      console.log('inside api ...');
      console.log(response);

      return response;
    } catch (error) {
      console.log(error);
    }

  };

export {postData,fetchData};
