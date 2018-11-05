
const request = require('request');

var geocodeAddress=(address , callback)=>{
    request({
      url : 'http://ip-api.com/json/'+address,
      json: true
    }, (error, response, body)=> {
      var x=body;
      if(error){
        callback("Unable to Connect Internet!");
      }
      else if(response.body.status==='fail'){
        callback("Unable to find IP address location");
      }
      else if(response.body.status==='success'){
        callback(undefined,{
          'ServiceProvider':x.as,
          'City':x.city,
          'RegionName':x.regionName,
          'Country':x.country,
          'TimeZone':x.timezone,
          'InternetServiceProvider':x.isp,
          'Latitute':x.lat,
          'Longitute':x.lon
        });
      }
    }
  );
};

module.exports={
  geocodeAddress
};
