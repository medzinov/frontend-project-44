/* eslint-disable no-console */
import runGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomNum = generateRandomNumber(1, 100);
  const correctAnswer = isEven(randomNum);
  const roundData = [randomNum, correctAnswer];
  return roundData;
};

const runBrainEven = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainEven;
