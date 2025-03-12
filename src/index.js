/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? '); // Дублируем запрос имени
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const roundData = generateRound();
    const question = roundData[0];
    const correctAnswer = roundData[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`\nCongratulations, ${userName}!`);
  return true;
};

export default runGame;
