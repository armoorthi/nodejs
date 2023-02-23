const { check } = require('express-validator');
const express = require("express");
const app = express();


module.exports.MidCheck = (req, res, next) =>  {
    if (req.query.location != null || req.query.location != '')
        {
            next();
        }
    else{
        res.json("Please provide location");
    }
};

module.exports.Auth = (req, res, next) =>  {
    
    console.log("Authentication");
            next();
     
};