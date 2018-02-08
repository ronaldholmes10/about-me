'use strict';

var userName = prompt ('Hi! What is your nom de guerre? What is that you say?  That is intellespeak for your name.');
alert ('Hi ' + userName + ' nice to meet you. I am going to ask you some weird questions about me.  It is a simple guessing game. Just, please promise not to think I am weird.');
console.log ('Reader was asked to input their name. Reader added username.' + userName);

var tally = 0;
function game1() {
  var question1 = prompt ('Do you think I have seen a ghost?').toLowerCase().trim();
  console.log ('User was asked a question about seeing ghosts. ' + question1);
  if (question1 === 'yes' || question1 === 'y'){
    alert ('Woohoo! I certainly have!');
    tally ++;
  } else if (question1 === 'no' || question1 === 'n'){
    alert ('Oh darn it!  I have seen many!');
  } else {
    alert ('I do not recognize your answer.  Try typing something else');
  }
}
game1();

function game2() {
  var question2 = prompt ('Do you think I like dogs or cats more?').toLowerCase().trim();
  console.log('User was asked a question about dogs and cats. ' + question2);
  if (question2 === 'cats') {
    alert ('Hooray, ' + userName + ' You are correct!');
    tally ++;
  } else if (question2 === 'dogs')
    alert ('Nope, ' + userName + ' you guessed wrong.');
  else {
    alert ('Please try again.');
  }
}
game2();

function game3() {
  var question3 = prompt ('Do you think I would eat monkey brains?').toLowerCase().trim();
  console.log('user was asked if I would eat monkey brains. ' + question3);
  if (question3 === 'yes'|| question3 === 'y'){
    alert('Yuck, I would never do that ' + userName + ' unless I was stranded on an island.');
  } else if (question3 === 'no' || question3==='n'){
    alert ('I am glad you got that one right!');
    tally ++;
  } else {
    alert('Please try again crazy person!');
  }
}
game3();

function game4() {
  var question4 = prompt ('Do you think I am weird yet?').toLowerCase().trim();
  console.log ('User was asked if they think I am weird. ' + question4);
  if (question4 ==='yes' || question4 === 'y'){
    alert ('You suck.  You are not nice ' + userName + '!');
  } else if (question4 === 'no' || question4 === 'n'){
    alert ('Thank you for being kind' + userName);
    tally ++;
  } else {
    alert ('I do not recognize your answer. Please enter something else.');
  }
}
game4();

function game5() {
  var question5 = prompt ('Last question, do you think I would try to drink blood if I were dying of thirst?').toLowerCase().trim();
  console.log('User was asked if I would try to drink blood. ' + question5);
  if (question5 === 'yes' || question5 === 'y'){
    alert ('You are a bobble head ' + userName + '!');
  } else if (question5 === 'no' || question5 === 'n'){
    alert ('Thank you for not thinking I would do that');
    tally ++;
  } else {
    alert ('I did not understand your answer. Please enter another one');
  }
}
game5();

function game6() {
  var guess = false;
  var numGuesses = 4;
  var bestAnswer = 3;

  while (guess === false && numGuesses > 0) {
    var question6 = parseInt(prompt ('Please guess a number between 1 and 10. You have ' + numGuesses + ' guesses left.'));
    console.log ('User was asked to guess a number and answered with ' + question6);

    if (question6 > bestAnswer) {
      alert ('Sorry, that number is too high. Guess again please.');
      numGuesses --;
    } else if (question6 < bestAnswer) {
      alert ('Sorry, that number is too low. Guess again please.');
      numGuesses --;
    } else if (question6 === bestAnswer) {
      alert ('You are correct!');
      guess = true;
      tally ++;
    } else {
      alert ('I do not understand your answer. Please try again');
      numGuesses --;
    }
  }
  if (numGuesses === 0) {
    alert('Sorry, you have no more guesses left.');
  }
}
game6();

function game7() {
  var guess = false;
  var numGuesses = 6;
  var anyAnswer = ['iraq', 'afghanistan', 'kuwait', 'germany', 'netherlands', 'luxemborg'];

  while (guess === false && numGuesses > 0) {
    var question7 = prompt('Which countries besides the United States have I been to?').toLowerCase().trim();
    console.log('User was asked which countries I visited and answered with ' + question7);
    for (var i = 0; i < anyAnswer.length; i ++) {
      if (question7 === anyAnswer[i]) {
        alert('You are correct! I have been to ' + question7);
        guess = true;
        tally ++;
        break;
      }
    }
    numGuesses --;
    if (guess === true) {
      alert('I have been to Iraq, Afghanistan, Kuwait, Germany, Nertherlands, Luxemborg.');
    } else if (numGuesses === 0) {
      alert('Sorry, you have no more guesses left. I have been to Iraq, Afghanistan, Kuwait, Germany, Nertherlands, Luxemborg.');
    } else {
      alert('I have not been to that country before, please try again!');
    }
  }
}
game7();

alert('That\'s it for the guessing game! You got ' + tally + '/7 questions right!');