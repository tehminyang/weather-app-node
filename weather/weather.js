const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/ae571ee323378dc751283b8f696fef26/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io servers.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature            
            });
        } 
    });
};
    
module.exports = {
    getWeather: getWeather
}
    

// ae571ee323378dc751283b8f696fef26
// https://api.darksky.net/forecast/ae571ee323378dc751283b8f696fef26/37.8267,-122.4233 