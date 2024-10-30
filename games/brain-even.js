#!/usr/bin/env node
/* eslint-disable no-console */
import {
  maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
  userName,
} from '../src/index.js';
;
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

userName
const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < maxAttempts; i += 1) {
    const randomNum = generateRandomNumber(1, 100);
    askQuestion(randomNum);
    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomNum);

    if(!checkAnswer(userAnswer, correctAnswer)){
      return
    }else{
      correctAnswers +=1
    }
    if (correctAnswers === maxAttempts) {
      console.log(`Congratulations! ${userName}`);
    }
  }
};

playBrainEven();
export default playBrainEven;
