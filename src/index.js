#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from "readline-sync";

const maxAttempts = 3

const askQuestion = (question) => {
    console.log(question);
  };

  const getUserAnswer = () => {
    return readlineSync.question("Your answer: ");
  };

  const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

export {maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber}

