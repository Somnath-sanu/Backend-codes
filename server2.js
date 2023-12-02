const http = require('http');
const data = require('./data');


http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'}); // 500 -> Internal server Error
    res.write(JSON.stringify(data))
    res.end();

}).listen(4000);