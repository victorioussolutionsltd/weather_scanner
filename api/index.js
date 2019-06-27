var express = require('express')
const fetch = require('node-fetch');
const tableHelper = require('./src/tableInformationHelpers');
const cors = require('cors')
var app = express()

app.use(cors());
app.options('*', cors());
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



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://weather:<password>@cluster0-rfkzc.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// const storeLatestWeatherData = () => {
//     console.log("store data");
// }

setInterval(storeLatestWeatherData, 6000);



exports = module.exports.app;
