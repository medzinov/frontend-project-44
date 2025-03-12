/* eslint-disable no-console */
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const generateRound = () => {
  const randomNum = generateRandomNumber(1, 20);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const roundData = [randomNum, correctAnswer];
  return roundData;
};

const runBrainPrime = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainPrime;
