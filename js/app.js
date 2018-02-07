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







var question6 = prompt ('How many pairs of shoes are in my closet? You have four guesses.').toLowerCase.trim;
If (question6 === 'two' || question6 === 2) {
  alert ('Yes, you are correct.')
 } else if (question6 === ('No, please try again.');
  } else {
    alert('I do not understand your answer, please try again');
  }
   var numberShoes = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
   for (var i = 0; i < 5; i++){
     execute code
   }
   //do not forget to break the loop
 