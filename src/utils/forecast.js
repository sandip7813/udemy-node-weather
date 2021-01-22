const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b5c833ca0a48dab021962d8a5a2a75f9&query=' + latitude + ',' + longitude + '&units=m'

    request({
        url,
        json: true
    }, 
    (error, {body}) => {
        if( error ){
            callback('Unable to connect weather service!', undefined);
        }
        else if( body.error ){
            callback('Unable to find location!', undefined);
        }
        else{
            const currentWeather = body.current
    
            callback(undefined, currentWeather.weather_descriptions[0])
        }
    })
}


module.exports = forecast