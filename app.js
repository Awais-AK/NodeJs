// console.log('hello, world!');

// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if(time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// function sayHi(){
//     console.log('Hi');
// }

// sayHi();

// function callFunc(func){
//     func();
// }

// //function expression

// var sayBye = function(){
//     console.log('Bye');
// }

// sayBye();

// callFunc(sayBye);

// // require and exports
  
// var counter = require('./count');

// var stuff = require('./count');

// console.log(stuff.counter(['shaun','crystal','ryu']));

// console.log(stuff.adder(4,5));

// console.log(stuff.pi);

// **Event emiiter

var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent','The event was emitted');

var util = require('util');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('mary');
var ryan = new Person('ryan');

var people = [james, mary , ryan];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'Hey bro!');

ryan.emit('speak', 'Hey guys I am stupid');

