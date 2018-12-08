const express = require('express');

const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = 3000;



app.use(express.json());

let db = undefined;



//dbconnection
let db;
app.use((req, res, next) =>{
  if(!db){
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
        if (err) return console.log(err)
        db = client.db('locDb');
        req.db = db;
        next();
    });
  }
  else{
    next();
  }
})


app.use('/api/location', require('./routes/location'));



app.listen(port, () => console.log(`Server listening port ${port}`));