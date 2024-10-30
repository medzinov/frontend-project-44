#!/usr/bin/env node
/* eslint-disable no-console */
import {
    maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
    userName,
  } from '../src/index.js';

userName
  const gcd = (a, b)=> {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }

  const playBrainGcd =()=> {
    console.log('Find the greatest common divisor of given numbers.')
    let correctAnswers = 0;
    for (let i = 0; i < maxAttempts; i += 1){
        const num1 = generateRandomNumber(1, 10);
        const num2 = generateRandomNumber(1, 10);
        const question = `${num1} ${num2}`;

    const correctAnswer = gcd(num1, num2)

    askQuestion(question)
    const userAnswer = getUserAnswer()

    if (checkAnswer(userAnswer, correctAnswer)) {
      correctAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return;
    }
  }

  if (correctAnswers === maxAttempts) {
    console.log(`Congratulations! ${userName}`);
  }
};

  playBrainGcd()