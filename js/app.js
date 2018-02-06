"use strict";

var userName = prompt ('Hi! What is your nom de guerre? What is that you say?  That is intellespeak for your name.');

alert ('Hi, ' + userName + 'Nice to meet you. I am going to ask you some weird questions about me.  It/s a simple guessing game. Just, please promise not to think I am weird.');


var question1 = prompt ('Do you think I/ve seen a ghost?') .toLowerCase.trim();
if (question1 === yes || question1 === y) {
alert ('Woohoo! I certainly have!');
} else {
alert ('Oh no!  I have/nt, but I wish I could say I have!');
} elseif (question1 === 'no'){
alert ('I don/t recognize your answer.  Try typing something else');
}



var question2 = prompt ('Do you think I like dogs or cats more?').toLowerCase.trim;
if (question2 === cats || question2 === Cats) {
alert ('Hooray, ' + username +  'You are correct!');
} else alert ('Nope, ' + userName + 'you guessed wrong.');
elseif (question2 === dogs) {
alert ('Please try again.');
}
