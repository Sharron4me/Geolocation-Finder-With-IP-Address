const fs = require('fs');
const yarg = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yarg
  .options({
    a:{
      demand :true,
      alias:'ipaddress',
      describe:'Ip adress to look for',
      string :true
    }
  })
  .help()
  .alias('help','h')
  .argv;
var res;
geocode.geocodeAddress(argv.a, (errorMessage , results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }
    else{
      res = results;
      console.log(`Service Provider:${res.ServiceProvider}`);
      console.log(`City:${res.City}`);
      console.log(`Region Name:${res.RegionName}`);
      console.log(`Country:${res.Country}`);
      console.log(`Time Zone:${res.TimeZone}`);
      console.log(`Internet Service Provider:${res.InternetServiceProvider}`);
      console.log(`Latitute:${res.Latitute}`);
      console.log(`Longitute:${res.Longitute}`);
      weather.weather(res.Latitute,res.Longitute,(errorMessage, weather_update)=>{
      console.log('Temperature:'+weather_update.currently.temperature);
      console.log('Summary Of weather:'+weather_update.currently.summary);  
      });
    }
});
