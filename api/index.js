var express = require('express')
const fetch = require('node-fetch');
const tableHelper = require('./src/tableInformationHelpers');
var app = express()

app.listen(8081)

console.log('server started')


app.get('/readWeather', function(req, res){
    var url = 'https://sparon.one.pl';

    fetch(url)
    .then(res => res.text())
    .then((body) => {
	    const informationFromTable = tableHelper.collectInformationFromTheHTML(body);
        
        console.log(informationFromTable);
        res.send(JSON.stringify(informationFromTable));
    });

 });

exports = module.exports.app;
