const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.static(__dirname + './client'));
app.use(bodyParser.text ());
app.use(bodyParser.urlencoded({extended : true}));
app.listen(process.env.port || port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = mongoose.Schema({
    Name: String,
    Email: {type : String, unique : true},
    Password: String,
    Address1: String,
    Address2: String,
    City: String,
    State: String,
    Zip: Number,
    Phone: Number,
    CC: Number,
    Expiry: String,
    CVV: Number,
    Bzip: Number

});

let Repo = mongoose.model('Repo', repoSchema, 'repos');



