#!/usr/bin/env node
/* eslint-disable no-console */
import {
    maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
  } from '../src/index.js';
  import greetAndAskForName from '../src/cli.js';

  const userName = greetAndAskForName()

  const playBrainGcd =()=> {
    console.log('Find the greatest common divisor of given numbers.')
    for (let i = 0; i < maxAttempts; i += 1){
        
    }
  }

  playBrainGcd()