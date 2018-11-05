const request = require('request');

var weather=(lat,lon,callback)=>request({
      url:'https://api.darksky.net/forecast/5ef6f0d5834e29289bff4784aaeabfc8/'+lat+','+lon,
      json:true
  },(error,response,body)=>{
    if(error){
      callback(error);
    }
    else{
      if(response.statusCode === 400){
        callback('Unable To Fetch Status');
      }
      else if(response.statusCode ===200){
        callback(undefined,body);
      }
    }
  });
module.exports={
  weather
};
