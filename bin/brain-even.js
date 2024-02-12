#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import greetAndAskForName from '../src/cli.js';

const userName = greetAndAskForName();
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const playGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);

    const correctAnswer = isEven(randomNum);

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations! ${userName}`);
  }
};

playGame();
export default playGame;
