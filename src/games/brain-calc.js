#!/usr/bin/env node
/* eslint-disable no-console */
import {
  maxAttempts, getUserAnswer, checkAnswer, generateRandomNumber, userName,
  askQuestion,
} from '../src/index.js';

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


const playBrainCalc = () => {
  console.log('What is the result of the expression?');
    let correctAnswers = 0
    for (let i = 1; i <= maxAttempts; i += 1) {
      const num1 = generateRandomNumber(1, 10);
      const num2 = generateRandomNumber(1, 10);
      const operators = ['+', '-', '*'];
      const operator = operators[generateRandomNumber(0, operators.length - 1)];
  
      const question = `${num1} ${operator} ${num2}`;
      const correctAnswer = calculateResult(num1, operator, num2);
  
      askQuestion(question)
      const userAnswer = getUserAnswer();

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
playBrainCalc();
export default playBrainCalc;
