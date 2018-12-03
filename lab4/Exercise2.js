//const si = require('systeminformation');
const os = require('os');
const {Observable} = require('rxjs');

const obs$ = Observable.create((observer) => {
    observer.next("Checking you system ...");
    let flag = true;
    if (os.totalmem() < 4 * 1024 * 1024 * 1024) {
        observer.next("This app needs at least 4 GB of RAM");
        flag = false;
    }
    if (os.cpus().length < 2) {
        observer.next("Processor is not supported");
        flag = false;
    }
   if(flag){
   setTimeout( () => {observer.complete();} ,1000);
   }

});

function checkSystem() {
    const sub = obs$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log("System is checked successfully")
    );
}
checkSystem();

