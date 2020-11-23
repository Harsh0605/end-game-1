var rs = require("readline-sync");
var chalk= require('chalk');

console.log('------------------------------------------------------------');
//output
console.log(chalk.black.bold.bgGreenBright("Hey! I am  Harsh and you are welcome to my quiz game! This game will ask u questions related to me . "));
console.log('----------------------------------------------------\n');

//input
var player=rs.question ("Please enter your name: ");

//processing --> Templating with strings 
var welcomeMessage= `Hey! ${player} It's good to have you here.`

//output
console.log(welcomeMessage);

// input
var relation = rs.question("Do you know Harsh? ");

// output
console.log(`It's really great.`)

console.log(chalk.cyan(`Now you must keep in mind the guidelines of the quiz given below . `));

var score= 0

console.log(chalk.white.bold.bgYellow(`Rules And Guidelines ::\n1. There are total 5 Questions and all are compulsory. \n2.On every correct answer you will be awarded by +4 and on every wrong -2 \n3. To give your answer just enter it or if the option given than the desired option. \n`));

// input
var ready = rs.question("Are you ready? ");
// output
console.log(chalk.green("GOOD TO HEAR! "));

console.log(chalk.blue(`And,here is your first question! `));

// input
var age= rs.question("How old am I? ");

//processing --> if/else or branching in programming
var check;

if (age=== "15") {
  check= "right answer!"
  //output
console.log(chalk.yellow(`Hey! You got a ${check}`));
  score=score+4;
  console.log(chalk.blue(`Your score is ${score}`));
}else{
  check= "wrong answer!"
  //output
console.log(`Hey! You got a ${check}`);
  score=score-2;
  console.log(`Your score is ${score}`);
}
console.log(`-----------------------`)

// CHALK NPM PACKAGES IMPORTED.
var questions = [
  {
    prompt: "What I do not like to eat?\n(a) Bitter Groud\n\(b) Pointed Groud\n(c) Orange",
    answer: "a"
  },

  {
    prompt: "What am I most afraid of?\n(a) Ghost\n(b)Water\n(c) Fire",
    answer:"a"
  },

  {
    prompt: "Which game did I play the most before?\n(a) PUBG\n(b) Free Fire\n(c) Call of Duty",
    answer:"a"
  },

  {
    prompt: "Is this my first app?\n(a) Yes\n(b) No", 
    answer:"a"
    },

]
for (var i=0; i<questions.length; i++){
  var response = prompt(questions[i].prompt)
  if (response ==questions[i].answer){
    alert(chalk.yellow("Hey! You got a right answer!"));
     score=score+4;
  console.log(chalk.blue(`Your score is ${score}`));
  console.log("------------------");
  }else{
    alert(chalk.yellow("Hey!You got a wrong answer!"))
    score=score-2;
  console.log(chalk.blue(`Your score is ${score}`));
  console.log("------------------");
  }
}
console.log("Yay!you scored: "+ score);
console.log("------------------");

console.log(chalk.green("Thanks for playing! Have a nice day!"))

