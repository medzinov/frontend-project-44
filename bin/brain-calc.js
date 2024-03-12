#!/usr/bin/env node
/* eslint-disable no-console */
import {
  maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
} from '../src/index.js';
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

  for (let i = 0; i < maxAttempts; i += 1) {
    const num1 = generateRandomNumber(1, 10);
    const num2 = generateRandomNumber(1, 10)
    const operators = ['+', '-', '*'];
    const operator = operators[generateRandomNumber(0, operators.length - 1)];

    askQuestion(`Question: ${num1} ${operator} ${num2}`)
    const correctAnswer = calculateResult(num1, operator, num2);

    const userAnswer = getUserAnswer()

    if (checkAnswer(userAnswer, correctAnswer)) {
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
