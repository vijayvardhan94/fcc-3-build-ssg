const axios = require('axios');
require('dotenv').config()

module.exports = async function(){
    try{
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
        return response.data;
        console.log(response);
    }catch(error){
        console.log(error);
    }
};
//509ad6dc159d4794b40dc22a3f92be19