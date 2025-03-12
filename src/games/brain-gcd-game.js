/* eslint-disable no-console */
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';
const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  const roundData = [question, correctAnswer];
  return roundData;
};

const runBrainGcd = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainGcd;
