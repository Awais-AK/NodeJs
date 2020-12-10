var http = require('http');
var fs = require('fs');

// - >> ** Read and write Streams

// var readStream = fs.createReadStream(__dirname +'/readMe.txt','utf8');
// var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// readStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     writeStream.write(chunk);
// });

// -> Piping readable stream to writable stream

// readStream.pipe(writeStream);

// -> Piping in the server

// var server = http.createServer(function(req,res){
//     console.log(req.url);
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     var readStream = fs.createReadStream(__dirname +'/readMe.txt','utf8');
//     readStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1'); // port and localhost

// console.log('Switching to port 3000 bitch!');

// -> HTML page in server

// var server = http.createServer(function(req,res){
//     console.log(req.url);
//     res.writeHead(200, {'Content-Type':'text/html'});
//     var readStream = fs.createReadStream(__dirname +'/index.html','utf8');
//     readStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1'); // port and localhost

// console.log('Switching to port 3000 bitch!');

// -> Serving JSON

// var server = http.createServer(function(req,res){
//     console.log(req.url);
    // res.writeHead(200, {'Content-Type':'application/json'});
    // var myObj = {
    //     name : 'Awais',
    //     job : 'Jobless',
    //     age : 20,
    // };
    // res.end(JSON.stringify(myObj));

// });

// server.listen(3000, '127.0.0.1'); // port and localhost

// console.log('Switching to port 3000 bitch!');

// -> Basic Routing **

var server = http.createServer(function(req,res){
    console.log(req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/data'){
        res.writeHead(200, {'Content-Type':'application/json'});
        var myObj = [{
            name : 'Awais',
            job : 'Jobless',
            age : 21,
        },
        {
            name : 'PD',
            job : 'Andha Paisa',
            age : 20,
        }];
        res.end(JSON.stringify(myObj));
    }
    else {
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

server.listen(3000, '127.0.0.1'); // port and localhost

console.log('Switching to port 3000 bitch!');
