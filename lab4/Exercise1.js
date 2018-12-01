const http = require('http')
const {fork} = require('child_process')
const server = http.createServer();
const url = require('url');
const path = require('path');

 server.on('request', (req,res) => {
        //get file from path 
        const thisUrl = url.parse(req.url,true);
        console.log(thisUrl.query.url);
        //pass the file to child process to read
        
        const childProcess = fork(path.resolve(__dirname,'Exercise1ReadFile.js'));       
        childProcess.send(thisUrl.query.url);
        childProcess.on('message', rs => res.end(rs))
        //res.end(rs))  
       // childProcess.on('exit', () => { res.end(); }); 
 });

 server.listen(4000);