var fs = require('fs');

// var readme =  fs.readFileSync('readMe.txt','utf8'); // It will completely read the file before executing the rest of the code.

// console.log(readme);

// fs.writeFileSync('writeMe.txt',readme);

fs.readFile('readMe.txt','utf8', function(err, data){  // It will not be blocking the flow of execution
   console.log(data);
   fs.writeFile('writeMe.txt',data, err => {
    if (err) {
      console.error(err)
      return
    };
    });
});
console.log('test');


