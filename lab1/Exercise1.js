const filterWords = ['house','nice'];
let input = "This house is nice!";

//ES6
String.prototype.filterWords = function(filter){
    let output = this;
    filter.map( x =>  output = output.replace(x,"***"));
    return output;
}
console.log(`ES6 ${input.filterWords(filterWords)}`);


//Promise
function fnPromise(arr, timer) {
    return new Promise((result) => {
        setTimeout(() => result(input.filterWords(arr)), timer);
    });
}

fnPromise(filterWords,2000)
.then(res => console.log(`Promise: ${res}`))
.catch(err => console.log(err));

//async/wait
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


//Observable
const { from } = require('rxjs');
const { map } = require('rxjs/operators');

  let output = input;
  from(filterWords)
    .pipe(
        map((word) => {return output = output.replace(word,"***");})
    )
    .subscribe(i => console.log(`Observable: ${i}`));


