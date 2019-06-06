var express = require('express')
const fetch = require('node-fetch');
var app = express()

app.listen(8081)

console.log('server started')




app.get('/readWeather', function(req, res){
    var url = 'https://sparon.one.pl';

    fetch(url)
    .then(res => res.text())
    .then((body) => {
        

    });

 });

exports = module.exports.app;