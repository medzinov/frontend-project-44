
import readlineSync from 'readline-sync';

const greetAndAskForName = () => {
 console.log('Welcome to the Brain Games!')
 let userName = readlineSync.question('May I have your name?');
 return 'Hello, ' + userName;
}

export default greetAndAskForName