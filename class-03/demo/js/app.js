'use strict';

// loop -> repeating a statement / group of statements until a certain condition is met

// for loop
// 1- counter is assigned
// 2- condition is checked
// 3- code is executed
// 4- update counter
// repeat 2,3,4

// log numbers 2 - 18
// for(var i = 2; i <= 18; i++){
//   console.log(i);
// }

// log all array elements
// var myArray = [12,3,18,9,5,22,100];
// for(var i = 0; i < myArray.length; i++ ){
//   console.log('element at index', i);
//   console.log(myArray[i]);
// }

//find the maximum element in an array
// var max = myArray[0];
// for(var i = 1; i < myArray.length; i++){
//   if(myArray[i]>max){
//     max = myArray[i];
//   }
// }

// console.log('the greatest number in the array is .. ', max);

// while loops
// var userInput = prompt('Enter an odd number');
// while(userInput % 2 == 0){
//    userInput = prompt('Enter an odd number');
// }

// do while - the code executes At Least once

// do{
//   var userInput = prompt('Enter an odd number');
// } while(userInput % 2 == 0);


//Falsy values
//var highScore; // false
//highScore = 0; // false
//highScore =''; //false
//highScore = 10/'a';  //false
//highScore = false;

//Truthy Values
// highScore =true;
// highScore = 5;
// highScore = 5/2;
// highScore = 'abc';

// var highScore = '0';
// if(highScore){
//   console.log('it was true');
// } else {
//   console.log('it was false');
// }

// array elements sum
// var myArray = [12,3,18,9,5,22,100];
// var sum = 0;
// for(var i = 0; i < myArray.length; i++){
//   sum = sum + myArray[i];
// }

// console.log(sum);

// loop that logs all even numbers between 0 and 100 without using conditional statements

// for(var i=0; i <= 100; i+=2){ // i = i +2
//   console.log(i);
// }

var x = '*';
for(var i =0; i < 5; i++){
  console.log(x);
  x = x + '*';
}