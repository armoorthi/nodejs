const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { param } = require("express-validator");
const mid = require("./validation.js")
const app = express();
require("dotenv").config();

app.get ( '/', mid.MidCheck, mid.Auth , function(req, res) {
   
    const apiKey = `${process.env.API_KEY}`;
    let location = req.query.location;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    
    request(url, function(err, response, body) {
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body);
            let weatherTemp = `${weather.main.temp}`,
            weatherFahrenheit = (weatherTemp * 9) / 5 + 32;
            res.json({resweatherFahrenheit: weatherFahrenheit });
           }
    });
});

app.listen(5000, function () {
    console.log("Weather app listening on port 5000!");
});