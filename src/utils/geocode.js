const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2FuZGlwLW5hbmR5IiwiYSI6ImNrZGJ1MDF6MDB2bW0zNm1oemVnc2RnazIifQ.LXhSB5MLNqPoVnVv5EKsEQ'

    request({
        url,
        json: true
    }, 
    (error, {body}) => {
        if( error ){
            callback('Unable to connect to the Geolocation service!', undefined)
        }
        else if( body.features.length === 0 ){
            callback('Unable to find location. Try again with some different Search Term!', undefined);
        }
        else{
            const mapboxData = body.features[0]
    
            callback(undefined, {
                latitude: mapboxData.center[1], 
                longitude: mapboxData.center[0],
                location: mapboxData.place_name
            })
        }
    })
}



module.exports = geocode