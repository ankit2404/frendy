const port = 8008;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const env = require('./config/environment');

app.use(express.urlencoded({extended:true}));
app.use('/', require('./routes/index'));

app.listen(port,function(error){
    if(error){
        console.log(`error in runnning the server : ${error}`);
    }
    console.log(`backend server is running on port : ${port}`);
});