const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

const topScorers = [
  {
    name: 'Ross',
    score: 4
  },
  {
    name: 'Mike',
    score: 4
  }
]

function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() == answer.toLowerCase()) {
		console.log(chalk.green('Correct answer'));
		score++;
	} else {
		console.log(chalk.red('Wrong answer. Correct answer is '+ answer));
	}
}

var userName = readlineSync.question('What is your name? ');
console.log(chalk.blueBright.bold('Hello ' + userName));

var questions = [
	{
		question: 'Who is captain of Indian Cricket team? ',
		answer: 'Virat Kohli',
	},
	{
		question: 'Which team did India win against in 2011 World Cup? ',
		answer: 'Sri Lanka' ,
	},
	{
		question: 'What is the total number of centuries hit by Sachin Tendulkar? ',
		answer: '100',
	},
	{
		question: 'In which year did India lift the first World Cup? ',
		answer: '1983',
	},
	{
		question: 'What is the total number of teams who played IPL 2020? ',
		answer: '8',
	},
];

for (let i=0; i<questions.length; i++){
	play(questions[i].question, questions[i].answer)
};

console.log(chalk.green('Your final score is: ') + chalk.yellow.underline.bold(score));

var hasUserBeatenHighScore = false;

console.log(chalk.white.underline('Top Scorers are:'));

for (let user of topScorers) {
  console.log(chalk.cyanBright(user.name) + " ", chalk.magentaBright(user.score) );
  if (score > user.score) {
    hasUserBeatenHighScore = true;
  }
};

if (hasUserBeatenHighScore) {
  console.log(chalk.greenBright('Congrats! You have beaten high score.'));
} else {
  console.log(chalk.red('Sorry! You have not beaten high score. Try again.'));
}

