// get random choice from the pool of Rock, Paper or Scissors
	// declare a array
	// get a randomised number as a index store it in a val
	// return array var[randomised number]
// store answer in val computerSelection

// use prompt() to ask for choice of player
// store answer in val playerSelectio

// create playRound() function that takes playerSelection & computerSelection as as parameter
// check if value of playerSelection won, lost or draw against computerSelection
// increments the counter of the player who won

// return string which outputs text declaring ow is the winner
// create function which loops playRound() for 5 times
// after 5 times it takes the counter and returns a string which declares the winner

//Sub-Problem 1

	function getComputerChoice()	{
		let randomCounter = Math.floor(Math.random()*3);
		// console.log(randomCounter);
		const computerSelection = ['Rock', 'Paper', 'Scissors'];
		// console.log(pool[randomCounter]);
		return computerSelection[randomCounter];
}

//Sub-Problem 2

	function getPlayerChoice()	{
		let playerSelection = prompt('What is your Choice?', 'Put your choice here');
		return playerSelection;
	}

// //Sub-Problem 3

// 	function playRound(playerSelection, computerSelection)	{
// 		let counterComputer;
// 		let counterPlayer;

// 		playerSelection = getPlayerChoice();
// 		computerSelection = getComputerChoice();

// 		console.log(playerSelection);
// 		console.log(computerSelection);

// 		if(playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Rock' && computerSelection === 'Scissors' )	{
// 			counterPlayer ++;
// 			console.log(`You won!!${playerSelection} beats ${computerSelection}.`);
// 			console.log(counterPlayer);
// 			console.log
// 		}else if(playerSelection === computerSelection){
// 			console.log('Draw. On to the next one.');
// 		} else	{
// 			counterComputer ++;
// 			console.log(`$You lost! {playerSelection} lost against ${computerSelection}.`);
// 		}
// 	}

