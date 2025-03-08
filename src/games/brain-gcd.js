#!/usr/bin/env node
/* eslint-disable no-console */
import {
  maxAttempts, getUserAnswer, checkAnswer, generateRandomNumber, userName,
  askQuestion,
} from '../src/index.js';



const gcd = (a, b)=> {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

  const playBrainGcd =()=> {
    console.log('Find the greatest common divisor of given numbers.')
    let correctAnswers = 0;
    for (let i = 0; i < maxAttempts; i += 1){
        const num1 = generateRandomNumber(1, 10);
        const num2 = generateRandomNumber(1, 10);
        const question = `${num1} ${num2}`;

    const correctAnswer = gcd(num1, num2)

    askQuestion(question)
    const userAnswer = getUserAnswer()

    if(!checkAnswer(userAnswer, correctAnswer)){
      return
    }else{
      correctAnswers +=1
    }
    if (correctAnswers === maxAttempts) {
      console.log(`Congratulations! ${userName}`);
    }
  }
};

  playBrainGcd()

  export default playBrainGcd