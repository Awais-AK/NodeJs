var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb+srv://root:root@todo.5sttd.mongodb.net/todo?retryWrites=true&w=majority')

//create a schema - blueprint
var todoSchema = new mongoose.Schema({
    item : String
})

// Create a model
var Todo = mongoose.model('Todo',todoSchema)
// var itemOne = Todo({item: 'first item' }).save(function(err){
//     if(err) throw err;
//     console.log('item saved')
// })


var data = [{item:'get milf'},{item: 'walk the bitch'},{item:'kick ass coding yo yoy oy'}]
var urlencodedParser = bodyParser.urlencoded({extended: false}); //middleware

module.exports = function(app){
    app.get('/todo',function(req,res){
        //get data from mongdb and sow the data
        Todo.find({},function(err, data){
            if(err) throw err;
            res.render('todo',{todos: data});
        });
    });
    app.post('/todo', urlencodedParser ,function(req,res){
        //add it to mongodb
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
            console.log('new item added');
        });
    });
    app.delete('/todo/:item',function(req,res){
        //delete
        console.log(req.params.item.replace(/\-/g," ").trim());
        Todo.find({item : req.params.item.replace(/\-/g," ").trim()}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
};