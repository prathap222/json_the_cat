const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = "Sorry!!! breed  not found";
        callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};

module.exports = fetchBreedDescription;
