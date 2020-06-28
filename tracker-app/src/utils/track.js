const request = require('request');

const forecast = (callback , country) => {
  const url = 'https://api.covid19api.com/total/dayone/country/' + country;
  request({ url , json: true } , (err , { body }) => {
      if(err) callback('Unable to connect to the service');
      else if(body.message) callback(body.message);
      else callback(undefined , body);
  });
};

module.exports = forecast;
