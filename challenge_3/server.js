const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
app.listen(process.env.port || port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log("Database connected!");
});

let userSchema =  new mongoose.Schema({
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
}, {collection: 'users'});

let User = mongoose.model('User', userSchema);

//-------------------------------------------------//
//---------------- ROUTES --------------------------//
//-----------------------------------------------//

// app.post("/api/users", (req, res) => {
// });

app.post('/accounts',(req,res) => {
    console.log(req.body);
    
    User.insertMany([req.body], (err, docs) => {
        if (err) console.log(err);
        else console.log("db insertion success!: ", docs);
       
    })
    res.sendStatus(200);
})