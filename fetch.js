const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D',
  params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});