'use strict';

 var userName = prompt ('Hi! What is your nom de guerre? What is that you say?  That is intellespeak for your name.');
 alert ('Hi ' + userName + ' nice to meet you. I am going to ask you some weird questions about me.  It is a simple guessing game. Just, please promise not to think I am weird.');
 console.log ('Reader was asked to input their name. Reader added username.' + userName);


 var question1 = prompt ('Do you think I have seen a ghost?').toLowerCase().trim();
 if (question1 === 'yes' || question1 === 'y'){
   alert ('Woohoo! I certainly have!');
 } else if (question1 === 'no'){
   alert ('Oh darn it!  I have seen many!');
 } else {
   alert ('I do not recognize your answer.  Try typing something else');
 }
 console.log ('User was asked a yes or no question.' + question1);

 var question2 = prompt ('Do you think I like dogs or cats more?').toLowerCase().trim();
 if (question2 === 'cats') {
   alert ('Hooray, ' + userName + ' You are correct!');
 } else if (question2 === 'dogs')
   alert ('Nope, ' + userName + ' you guessed wrong.');
 else {
   alert ('Please try again.');
 }
 console.log('User was asked a question about dogs and cats.' + question2);

var question3 = prompt ('Do you think I would eat monkey brains?').toLowerCase().trim();
if (question3 === 'yes'|| question3 === 'y'){
  alert('Yuck, I would never do that ' + userName + ' unless I was stranded on an island.');
} else if (question3 === 'no' || question3==='n'){
  alert ('I am glad you got that one right!');
} else {
  alert('Please try again crazy person!');
}
console.log('user was asked a yes or no question' + question3);

var question4 = prompt ('Do you think I am weird yet?').toLocaleLowerCase().trim();
if (question4 ==='yes' || question4 === 'y'){
  alert ('You suck.  You are not nice ' + userName + '!');
} else if (question4 === 'no'){
  alert ('Thank you for being kind' + userName);
} else {
  alert ('I do not recognize your answer. Please enter something else.');
}
console.log ('User was asked a yes or no queston' + question4);

var question5 = prompt ('Last question, do you think I would try to drink blood if I were dying of thirst?').toLocaleLowerCase().trim();
if (question5 === 'yes' || question5 === 'y'){
  alert ('You are a bobble head ' + userName + '!');
} else if (question5 === 'no'){
  alert ('Thank you for not thinking I would do that');
} else {
  alert ('I did not understand your answer. Please enter another one');
}
console.log('User was asked a yes or no question' + question5);







var question6 = false;
var numGuesses = 4;
var bestAnswer = 3;

while (question6 === false && numGuesses < 5) {
  question6 = prompt ('Please guess a number between 1 and 10.');
  question6 = parseInt (question6);
  console.log ('User was asked to guess a number and answered with ' + question6);

  if (question6 === false){
    alert ('Sorry, you are wrong. Guess again please.'); prompt ('Please guess a number between 1 and 10.'); } else if (question6 === bestAnswer){ alert ('You are correct!');} else alert ('I do not understand your answer. Please try again');}





var question7 = false;
 var numGuesses = 6;
 var anyAnswer = [iraq, afghanistan, kuwait, germany, netherlands, luxemborg];

 while queestion7 = false; {
  alert ('No, try another country.');
 }
for