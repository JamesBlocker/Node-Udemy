// function statement
function greet() {
    console.log('hi');
}
greet();

// functions are first class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi James')
}
greetMe();

//first class use
logGreeting(greetMe);