//Variables
var rock = 'rock';
var paper = 'paper';
var scissors = 'scissors';
var tie = 'tie';
var win = 'win';
var player1Score = 0;
var player2Score = 0;

//Player intro
var player = prompt('Are you player one or two? Enter 1 or 2');

if (player == 1) {
	console.log(option1);
} else {
	console.log(option2);
}

//Player 1 options
var option1 = prompt('Welcome! Player one please enter r, p or s');

if (option1 == 'r') {
	console.log(rock);
	alert("You choose " + rock);
} else if (option1 == 'p') {
	console.log(paper);
	alert("You choose " + paper);
} else if (option1 == 's') {
	console.log(scissors);
	alert("You choose " + scissors);
}

//Player 2 options
var option2 = prompt('Welcome! Player two please enter r, p or s');

if (option2 == 'r') {
	console.log(rock);
	alert("You choose " + rock);
} else if (option2 == 'p') {
	console.log(paper);
	alert("You choose " + paper);
} else if (option2 == 's') {
	console.log(scissors);
	alert("You choose " + scissors);
}

//Rock, Paper, Scissors functionality
if (option1 == option2) {
	console.log(tie);
	alert('We have a tie!');
} else if (option1 == 'r' && option2 == 'p') {
	console.log(win);
	player1Score++;
	player2Score++;
	alert('Player 1 is the winner!');
} else if (option2 == 'r' && option1 == 'p') {
	console.log(win);
	alert('Player 2 is the winner!');
	player2Score++;
} else if (option1 == 'r' && option2 == 's') {
	console.log(win);
	alert('Player 1 is the winner!');
	player1Score++;
} else if (option2 == 'r' && option2 == 's') {
	console.log(win);
	alert('Player 2 is the winner!');
	player2Score++;
} else if (option1 == 's' && option2 == 'p') {
	console.log(win);
	alert('Player 1 is the winner!');
	player1Score++;
} else if (option2 == 's' && option1 == 'p') {
	console.log(win);
	alert('Player 2 is the winner!');
	player2Score++;
}