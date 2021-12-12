'use strict';


let myOrigin= prompt('I am from the United States?').toLowerCase();

if (myOrigin === 'yes'|| myOrigin === 'y') {
  //console.log('Wrong! I am not from the US, I came from Ethiopia at the age of 11');
  alert('Wrong! I am not from the US, I came from Ethiopia at the age of 11');
}
else if (myOrigin === 'no'|| myOrigin === 'n') {
  //console.log('Correct! I am not from the US, I came from Ethiopia at the age of 11');
  alert('Correct! I am not from the US, I came from Ethiopia at the age of 11');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let favoriteNumber= prompt('Is my favorite number seven? Yes or No?').toLowerCase();

if (favoriteNumber === 'yes'|| favoriteNumber === 'y') {
  //console.log('Correct! My favorite number is 7');
  alert('Correct! My favorite number is 7');
}
else if (favoriteNumber === 'no'|| favoriteNumber === 'n') {
  //console.log('Wrong! My favorite number is 7');
  alert('Wrong! My favorite number is 7');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let myAge= prompt('Am I 24? Yes or No?').toLowerCase();

if (myAge === 'yes'|| myAge === 'y') {
  //console.log('Wrong! I am 25 years old');
  alert('Wrong! I am 25 years old');
}
else if (myAge === 'no'|| myAge === 'n') {
  //console.log('Correct! I am not 24 years old, I am 25');
  alert('Correct! I am not 24 years old, I am 25');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let favoriteFood= prompt('Is my favorite food pasta Yes or No?').toLowerCase();

if (favoriteFood === 'yes'|| favoriteFood === 'y') {
  //console.log('Wrong! My favorite food is not pasta, it is tacos');
  alert('Wrong! My favorite food is not pasta, it is tacos');
}
else if (favoriteFood === 'no'|| favoriteFood === 'n') {
  //console.log('Correct! My favorite food is not pasta, it is tacos');
  alert('Correct! My favorite food is not pasta, it is tacos');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let myHobby = prompt('Do I like to cook?').toLowerCase();

if (myHobby === 'yes'|| myHobby === 'y') {
  //console.log('Correct! I do enjoy cooking');
  alert('Correct! I do enjoy cooking');
}
else if (myHobby === 'no'|| myHobby === 'n') {
//console.log('Wrong! I do like to cook');
  alert('Wrong! I do like to cook');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}

let welcomeMessage = prompt('What is your name?');
alert('Welcome to my page ' + welcomeMessage);


let input = prompt('How many siblings do I have?');
let attempts = 3;
let correctAnswer = 3;

for(let i = 0; i< attempts; i++){
  if(input === correctAnswer){
    alert('You are correct! I have 3 siblings');
    break;
  }else if(input < 3){
    input= prompt('Too low! Try a higher number');
  } else if(input > 3){
    input= prompt('Too high! Try a lower number');
  }
}
