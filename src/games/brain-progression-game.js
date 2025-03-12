/* eslint-disable no-console */
import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + i * step;
  }
  return progression;
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRound = () => {
  const start = generateRandomNumber(2, 9);
  const step = generateRandomNumber(2, 9);
  const progression = generateProgression(start, step, generateRandomNumber(5, 15));
  const unknownNum = generateRandomNumber(1, progression.length - 1);
  const correctAnswer = progression[unknownNum].toString();
  progression[unknownNum] = '..';
  const question = `${progression.join(' ')}`;
  const roundData = [question, correctAnswer];
  return roundData;
};

const runBrainProgression = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainProgression;
