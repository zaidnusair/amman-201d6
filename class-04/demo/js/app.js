//functions -> lines of code that we can use more than one time //  a block of code designed to perform a particular task.

// declaration
function sayHello() {
  console.log('hello world');
}

// // call the function - invoke the function
sayHello();

// // we can have parameters in our function to receieve values ..
function sayGoodBye(userName){
  console.log('Good bye ', userName);
}

// // Call the function and pass an argument
sayGoodBye('test user');

// function that returns value
function getFullName(firstName, lastName){
  return firstName + ' ' + lastName;
}

console.log(getFullName('Hidaya','Syam'));

var fullName = getFullName('Hidaya','Syam');
console.log('variable value is ', fullName);

// function that returns multipe values
function squareProperties(sideLength){
  var area = sideLength * sideLength;
  var perimerter = 4 * sideLength;

  return [area, perimerter];
}

console.log(squareProperties(5));



// Anonymous functions - the function has no name, and the call cannot appear before decleration 
var squareProps = function(sideLength){
  var area = sideLength * sideLength;
  var perimerter = 4 * sideLength;

  return [area, perimerter];
};

var sideLength = 12;
var squarePropsValues = squareProps(sideLength);
console.log(squarePropsValues);

// IIFE - immediately invoked function expression
var squarePropertiesIm = (function(){
  console.log('I am an immediately invoked function');
})();


// Scope
// global variables - declared outside the function , visible from anywhere
// local variables - declared inside a function, only visible to it

var globalVariable;

for(var i = 0; i < 3; i++){
  console.log('is value of i accessible from inside the loop? ', i);
}

function scoper(param){
  var localVariable = 'I like privacy';
  globalVariable = 'I was assigned a value inside the function';
  console.log('From inside the function, can we see globaVariable? ',globalVariable);
  console.log('From inside the function, can we see localVariable? ',localVariable);
  console.log('From inside the function, can we see param? ',param);

  console.log('can I see i from here? ', i);
  
  for(var j = 0; j < 3; i++){
    console.log('is value of j accessible from inside the loop? ', j);
  }

  console.log('is value of j accessible from inside the function? ', j);

}

scoper('x');

console.log('is value of j accessible here? ', j);


//scoper('I am the param');

console.log('From outside the function, can we see globaVariable? ',globalVariable);
console.log('From outiside the function, can we see localVariable? ',localVariable);
console.log('From outside the function, can we see param? ',param);




