#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import greetAndAskForName from '../src/cli.js';

const userName = greetAndAskForName()
const maxAttempts = 3;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    console.log('Correct!');
    return true
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return false; 
  }
};

export {
  maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber, userName
};
