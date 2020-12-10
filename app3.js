var fs = require('fs');

// // **Delete files

// fs.unlink('./writeMe.txt', function(err){
//     if(err) {
//         return console.log("Delete error: " + err);
//     }
//     else{
//         console.log("file deleted successfully");
//     }
// });

// Creating directories

// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt','utf8',function(err, data){
//         fs.writeFile('./stuff/writeMe.txt',data,  err => {
//             if (err) {
//               console.error(err)
//               return
//             };
//             });
//     });
// });

fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff',err => {
        if (err) {
            console.error(err)
            return
        };
        });
});

