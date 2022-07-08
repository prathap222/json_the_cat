const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  
  const jsonResponse = JSON.parse(body);
 

  if (jsonResponse.length === 0) {
    console.log("Sorry! breed not found");
  } else {
    console.log(jsonResponse[0].description);
  }
});