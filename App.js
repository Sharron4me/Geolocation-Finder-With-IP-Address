const request = require('request');
const fs = require('fs');
const yarg = require('yargs');

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

request({
  url : 'http://ip-api.com/json/'+argv.a,
  json: true
}, (error, response, body)=> {
  var x=body;
  if(error){
    console.error("Unable to Connect Internet!");
  }
  else if(response.body.status==='fail'){
    console.error("Unable to find IP address location");
  }
  else if(response.body.status==='success'){
    console.log(`Service Provider:${x.as}`);
    console.log(`City:${x.city}`);
    console.log(`Region Name:${x.regionName}`);
    console.log(`Country:${x.country}`);
    console.log(`Time Zone:${x.timezone}`);
    console.log(`Internet Service Provider:${x.isp}`);
    console.log(`Latitute:${x.lat}`);
    console.log(`Longitute:${x.lon}`);
  }
});
