const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.static(__dirname + './client'));
app.use(bodyParser.text ());
app.use(bodyParser.urlencoded({extended : true}));
app.listen(process.env.port || port, () => {
    console.log(`Listening at http://localhost:${port}`);
})


