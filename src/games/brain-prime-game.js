#!/usr/bin/env node
/* eslint-disable no-console */
import runGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is prime, otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const generateRound = () => {
  const randomNum = Math.floor(Math.random() * (20 - 1) + 1);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const roundData = [randomNum, correctAnswer];
  return roundData;
};

const runBrainPrime = () => {
  runGame(gameDescription, generateRound);
};

export default runBrainPrime;
