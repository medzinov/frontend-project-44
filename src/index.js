#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

let maxAttempts = 3;

const askQuestion = (question) => {
  console.log(question);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (userAnswer, correctAnswer) => userAnswer.toString() === correctAnswer.toString();

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
};
