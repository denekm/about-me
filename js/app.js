'use strict';
let userScore = '0';



let myOrigin= prompt('I am from the United States?').toLowerCase();

if (myOrigin === 'yes'|| myOrigin === 'y') {
  //console.log('Wrong! I am not from the US, I came from Ethiopia at the age of 11');
  alert('Wrong! I am not from the US, I came from Ethiopia at the age of 11');
}
else if (myOrigin === 'no'|| myOrigin === 'n') {
  userScore++;
  //console.log('Correct! I am not from the US, I came from Ethiopia at the age of 11');
  alert('Correct! I am not from the US, I came from Ethiopia at the age of 11');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let favoriteNumber= prompt('Is my favorite number seven? Yes or No?').toLowerCase();

if (favoriteNumber === 'yes'|| favoriteNumber === 'y'){
  userScore++;
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
else if (myAge === 'no'|| myAge === 'n'){
  userScore++;
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
  userScore++;
  //console.log('Correct! My favorite food is not pasta, it is tacos');
  alert('Correct! My favorite food is not pasta, it is tacos');
}
else {
  //console.log('Invalid answer,please answer with a Yes or No');
  alert('Invalid answer,please answer with a Yes or No');
}


let myHobby = prompt('Do I like to cook?').toLowerCase();

if (myHobby === 'yes'|| myHobby === 'y') {
  userScore++;
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
let answer = 3;

for(let i = 0; i< attempts; i++){
  if(parseInt(input)=== answer){
    userScore++;
    alert('You are correct! I have 3 siblings');
    break;
  }else if(input < 3){
    input= prompt('Too low! Try a higher number');
  } else if(input > 3){
    input= prompt('Too high! Try a lower number');
  }
}


let states= ['washington','california','florida'];
let correctAnswer = false;
let attemptsRemaining = 6;

while(attemptsRemaining && !correctAnswer){
  let guess = prompt('Which states have I been to?').toLowerCase();
  console.log(guess);
  attemptsRemaining--;
  console.log(attemptsRemaining);
  for(let i = 0; i<states.length; i++){
    console.log(states[i]);
    if(guess === states[i]){
      userScore++;
      alert('Correct! I have been to ' + states[i]);
      correctAnswer= true;
    }
  }
  if (attemptsRemaining === 0){
    alert('Nice try but the states I have been to are ' + states);
  }
}
alert('Your final score is ' + userScore +' out of 7 points! Thank you for playing');
