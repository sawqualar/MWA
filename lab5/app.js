const axios  = require(`axios`);
const express = require(`express`);
const app = express();

const promise = () => {
    return axios.get('https://randomuser.me/api/?results=10');
}

/*
function getDataUsingPromise(){
    return promise().then( result => {
        console.log(`my promise ${result.data.results}`);
            return result.data.results;
    })
    .catch(err => {
            throw err;
    });
}*/

async function getDataUsingAsync(){
    try{
        return await axios.get('https://randomuser.me/api/?results=10');
    }
    catch(error){

    }
}

app.get('/', (req,res) => {
    res.status(200).set({"content-Type": "text/html"}).send("Welcome to My API").end();

});

app.get('/users', (req,res) => {
    getDataUsingAsync().then(response => {
      //  console.log(`users data ${data}`);
        res.status(200).set({"content-Type" : "application/json"}).send(response.data.results).end();
    });
});

app.set('x-powered-by',false);
app.set('trust proxy',true);
app.set('strict routing',true);
app.set('case sensitive routing',true);

app.listen(4000, () => {
    console.log(`Listing localhost: 4000`);
})