#!/usr/bin/env node
/* eslint-disable no-console */
import {
    maxAttempts, getUserAnswer, checkAnswer, generateRandomNumber, userName,
    askQuestion,
  } from '../src/index.js';


  
const generateProgression = (start, step, length = 10)=> {
    const progression = [];
  for(let i = 0; i < length; i += 1){
    progression[i] = start + i * step
  }
  return progression
}

const playProgression = () => {
    console.log('What number is missing in the progression?')
    let correctAnswers = 0

for(let i = 1; i <= maxAttempts; i += 1){
    const start = generateRandomNumber(2,9)
    const step = generateRandomNumber(1,9)
    const progression = generateProgression(start, step, generateRandomNumber(5, 15))
    const unknown = generateRandomNumber(1, progression.length -1)
    const correctAnswer = progression[unknown]
    progression[unknown] = '..'
    
    const question = `${progression.join(' ')}`
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
}
playProgression()

export default playProgression