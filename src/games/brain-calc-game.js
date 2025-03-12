/* eslint-disable no-console */
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameDescription = 'What is the result of the expression?';

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

const generateRound = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateResult(num1, operator, num2).toString();
  const roundData = [question, correctAnswer];
  return roundData;
};

const runBrainCalc = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainCalc;
