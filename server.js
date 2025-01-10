const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());


app.listen(5000,()=>{
    console.log('Server running: http://localhost:5000')
});