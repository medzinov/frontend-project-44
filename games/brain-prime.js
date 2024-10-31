#!/usr/bin/env node
/* eslint-disable no-console */
import {
    maxAttempts, askQuestion, getUserAnswer, checkAnswer, generateRandomNumber,
    userName,
  } from '../src/index.js';

  
function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  
const playPrime = () => {
  console.log("Answer 'yes' if the number is prime, otherwise answer 'no.")
    let correctAnswers = 0
    for (let i = 0; i < maxAttempts; i += 1){
    const number =  generateRandomNumber(1, 20)
    askQuestion(`${number}`)
    const userAnswer = getUserAnswer()
    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    if(!checkAnswer(userAnswer, correctAnswer)){
        return
      }else{
        correctAnswers +=1
      }
      if (correctAnswers === maxAttempts) {
        console.log(`Congratulations! ${userName}`);
      }
    }
}


playPrime()
export default playPrime
