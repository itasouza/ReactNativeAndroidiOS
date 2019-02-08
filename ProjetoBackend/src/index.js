const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://itaprojetos:projeto01@ds125225.mlab.com:25225/goweek-itaprojetos',
    {
         useNewUrlParser: true 
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000,()=>{
    console.log(" :) Server Started on port 3000");
});