#!/usr/bin/env node
/* eslint-disable no-console */
import runGame from '../index.js';

const gameDescription = "Answer 'yes' if the number is even, otherwise answer 'no.";

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(randomNum);
  const roundData = [randomNum, correctAnswer];
  return roundData;
};

const runBrainEven = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainEven;
