var readlineSync = require("readline-sync");

var score = 0;

var userName = question("Hello!, What is your name? ");
console.log("Welcome " + userName);

console.log("-----------");
console.log("Here,I am going to test your knowledge of Astronomy.");
console.log("-----------");

var questions = [
  {
    question:
      "How many planets are there in our solar system?  \na.4 \nb.6 \nc.8 \nd.9",
    answer: "c",
  },
  {
    question:
      "Which is the biggest planet in size?  \na.Earth \nb.Mercury \nc.Venus \nd.Jupiter ",
    answer: "d",
  },
  {
    question:
      "When did the big bang happen?  \na. 4 billion years ago \nb. 13.8 billion years ago \nc. 10 billion years ago \nd. 13 billion years ago ",
    answer: "b",
  },
  {
    question:
      "What is the region of space called from where not evenlight can escape? \na. Quasars \nb. black hole \nc. Galaxy \nd. Nebulae  ",
    answer: "b",
  },
  {
    question:
      " What is the point of no return on black hole called?  \na. Schwarzschild radius  \nb. Einstein-Rosen bridge \nc. Event horizon ",
    answer: "c",
  },
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right! ");
    score++;
    console.log("Your score is ".score);
  } else {
    console.log("You are wrong! ");
    score--;
    console.log("your score is ".score);
  }
}
