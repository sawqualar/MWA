/*
let input = "This house is nice!";

String.prototype.filterWords = function(filter){
   let output = this;
    for(let x of filter){
        console.log(x);
        output = output.replace(x,"***");
    }
    return output;
}
console.log(input.filterWords(["house","nice"]));
*/
/* ES6 features*/
/*
let input = "This house is nice!";
String.prototype.filterWords = function(filter){
    let output = this;
    filter.map( x => output = output.replace(x,"***"));
    return output;
}
console.log(input.filterWords(["house","nice"]));
*/


//const{Observable,of} = require('rxjs'); 
//const{map,filter}=require('rxjs/operators')

String.prototype.filterWords = function(filter){
    let output = this;
    filter.map( x =>  output = output.replace(x,"***"));
    return output;
}

const filterWords = ['house','nice'];
let input = "This house is nice!";

function fnPromise(arr, timer) {
    return new Promise(result => {
        setTimeout(() => result(input.filterWords(arr)), timer);
    });
}

//Promise
fnPromise(filterWords,2000)
.then(res => console.log(`Promise: ${res}`))
.catch(err => console.log(err));


async function replace(){
      try{
            let result = await fnPromise(filterWords,4000);
            console.log(`Async: ${result}`);
      }
      catch(error){
            console.log(error);
      }
}
replace();
console.log('Finish');

