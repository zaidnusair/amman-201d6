'use strict';

var carModel = 'Cadillac';  //string - text
var carModelYear = 2015;    //Numeric
var availableInJordan = true;  //true / false

console.log('Type of my carModel variable is', typeof(carModel));
console.log('Type of my carModelYear variable is', typeof(carModelYear));
console.log('Type of my availableInJordan variable is', typeof availableInJordan);

var answer1 = confirm('Is cadillac an american car?');
console.log('User\'s answer was ', answer1);

// control flow statements

// if statemens

if(answer1){
  console.log('Correct Answer!');
} else {
  console.log('Oops! wrong answer');
}

// True - False
// Logical Operators
// AND - OR - NOT

// True - False
// True AND True -> True
// Ture And False -> False
// False And True -> False
// False And False -> False 

//And -> it only evaluates to true, when both (all) operands are true 

// Or
// True or True -> True
// True or False -> True
// False or True -> True
// False or Fale -> False

// At least, one operand should be true so that it evaluates to True

// Not
// Not true -> False
// Not False -> True

var firstBoolean = false;
var secondBoolean = false;
var thirdBoolean = false;

// AND -> &&
// Or -> ||
if(firstBoolean && thirdBoolean){
  console.log('Both, first and third booleans are true');
} else if (firstBoolean || secondBoolean){
  console.log('One of, or both, first or second boolean is true');
} else if (thirdBoolean){
  console.log('only third one is true');
} else {
  console.log('all the three variables are false');
}

// Switch statements

var favCar = prompt('What is your favorite car?').toLowerCase();
switch(favCar.toLowerCase()) {
  case 'bmw':
  case 'mercedes':
    console.log('you are more into German cars');
    break;
  case 'jeep':
  case 'cadillac':
    console.log('you are more into American cars');
    break;
  case 'mitsubishi':
    console.log('you are more into Japanese cars');
    break;
  default:
    console.log('I am not familiar with that car');
}

var myNumber = 26;

// positive or negative
if(myNumber >= 0){
  console.log('My Number is Positive');
} else{
  console.log('My number is negative');
}

// odd or even?
if(myNumber % 2 === 0){
  console.log('My Number is Even');
} else{
  console.log('My Number is Odd');
}

// largest number
// var firstNumber = 2;
// var secondNumber = 5;
// var thirdNumber = 10;

// first way
// if(firstNumber > secondNumber){
//   if(firstNumber > thirdNumber){
//     console.log('First number is the biggest one');
//   } else {
//     console.log('Third number is the biggest one');
//   }
// } else if (secondNumber > thirdNumber){
//   console.log('second number is the greatest one');
// } else {
//   console.log('third number is the greatest one');
// }

// second way
// var numbersArray = [15,5,10];

// var max = numbersArray[0];

// if(max < numbersArray[1]){
//   max = numbersArray[1];
// }

// if (max < numbersArray[2]){
//   max = numbersArray[2];
// }

// console.log('the greatest one is ', max);










