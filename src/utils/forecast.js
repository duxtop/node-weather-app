const request = require('request')

const forecast= (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=7cbb81c9aee91269f5f06d1c8a61f6db&query='+ longitude +','+ latitude

    request({url, json: true},(error, {body})=> {
        if(error){
            callback('Unable to connect with server', undefined)
        }else if (body.error){
            callback('Unable to find your address', undefined)
        }else{
            callback(undefined, 'It is currently '+ body.current.temperature +' degress out. It feels like '+ body.current.feelslike +' degress out. The humidity is '+ body.current.humidity +' degress out. :)')
        }
    })

}

module.exports = forecast