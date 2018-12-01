const fs = require("fs")
const path = require("path");
const getfile = (filePath) => {
    var rs = fs.readFileSync(path.resolve(__dirname,filePath), 'utf8');
    return rs;
};

process.on('message', (filePath) => { 
    console.log(`message ${filePath}`);
    const rs = getfile(filePath);
    process.send(rs);
})