#!/usr/bin/env node
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import greetAndAskForName from '../src/cli.js';

const calculateResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error';
  }
};

const userName = greetAndAskForName();
const playBrainCalc = () => {
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const expression = `${num1} ${operator} ${num2}`;
    const correctResult = calculateResult(num1, operator, num2);

    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctResult) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctResult}`,
      );
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations! ${userName}`);
  }
};
playBrainCalc();
export default playBrainCalc;
