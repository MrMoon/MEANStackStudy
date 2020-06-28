const request = require('request');

let url = 'https://api.covid19api.com/';
const forecast = (callback , address) => {
  url += (!address) ? 'summary' : '/total/country/' + address;
  request({ url , json: true } , (err , { body }) => {
      if(err) callback('Unable to connect to the service');
      else if(body.message) callback(body.message);
      else callback(undefined , body);
  });
};

module.exports = forecast;
