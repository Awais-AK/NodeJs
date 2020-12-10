var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.use('/assets', express.static('assets'));

var urlencoded = bodyParser.urlencoded({ extended : false }); //middleware

app.get('/',function(req, res){
    res.render('index');
});
app.get('/contact',function(req, res){
    res.render('contact',{qs:req.query});
});

app.post('/contact', urlencoded, function(req, res){
    console.log(req.body);
    res.render('contact-success',{ data : req.body });
});

app.get('/profile/:name',function(req, res){

    var data = {age:20, job: 'jobless', list: ['hi','hello','tata','khatam','gaya'] };
    res.render('profile', {person : req.params.name, data : data}); 
});


app.listen(3000);

