console.log(hello);
var hello = 'world';

// var hello;  declare a varibale
// console.log(hello); undefined
// hello = world; assign the variable




var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle ; declare the global variable haystack
// needle = 'haystack' ; assign the global variable
// test(); function call
// var needle; declare the local varibale
// needle = 'magnet'; assing the varibale
// console.log(needle); the output is 'magnet''


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan ; declare the global variable brendan
// brendan = 'super cool'; assign the global variable
// function print(); skips the function until it is called and invoked
// console.log(brendan); 'super cool'








var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food; declare a globl varibale called food
// food = 'chicken'; assign the value to it
// console.log(food); output is chicken
// eat(); call the function
// declare a local varibale called food inside the function;
// assign the value 'half-chicken' to the local variable;
// console.log(food); logs 'half-chicken';
// assign the value gone to food inside the local scope;
// output is chicken 





mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//output error


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// van genre;
// rewind();
// output undefined rock r&b disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//output sanjose seattle burbank seattle


