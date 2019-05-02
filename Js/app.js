'use strict';

var userName = prompt('hi, what is your name? i am joey.');
alert ('nice to meet you '+userName+' glad to have you in codefellows. lets play a guessing game.');
console.log ('did first question and got username');

function middleName() {
  var answerOne = prompt('is my middle name henry? answer yes or no');
  if (answerOne === 'yes') {
    alert('yes my middle name is henry');
  }
}

function chocolate() {
  var answerTwo = prompt('do i like chocolate? answer yes or no');
  if (answerTwo === 'yes') {
    alert('yes I do like chocolate');
  }
}

function games() {
  var answerThree = prompt('do I enjoy video games? answer yes or no');
  if (answerThree === 'yes') {
    alert('yes I enjoy video games greatly');
  }
}

function pets() {
  var answerFour = prompt('do I enjoy pets? answer yes or no');
  if (answerFour === 'yes') {
    alert('yes I greatly enjoy the company of pets');
  }
}

function dND() {
  var answerFive = prompt('do I enjoy dungeons and dragons? answer yes or no');
  if (answerFive === 'yes') {
    alert('yes, I never go anywhere without at least one of my D&D books');
  }
}

middleName();
chocolate();
games();
pets();
dND();