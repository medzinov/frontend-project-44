#!/usr/bin/env node
/* eslint-disable no-console */
import { maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber } from '../src/index.js';
import greetAndAskForName from '../src/cli.js';

const userName = greetAndAskForName();
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < maxAttempts; i += 1) {
    const randomNum = generateRandomNumber(1, 100);
    askQuestion(`Question: ${randomNum}`)
    const userAnswer = getUserAnswer();
    const correctAnswer = isEven(randomNum);

    if (checkAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`,
      );
      return;
    }
  }

  if (correctAnswers === maxAttempts) {
    console.log(`Congratulations! ${userName}`);
  }
};

playBrainEven();
export default playBrainEven;
