// get random choice from the pool of Rock, Paper or Scissors
	// declare a array
	// get a randomised number as a index store it in a val
	// return array var[randomised number]
// store answer in val computerSelection

// use prompt() to ask for choice of player
// store answer in val playerSelection

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

//Sub-Problem 3

	function playRound()	{

		let playerSelection = getPlayerChoice();
		let computerSelection = getComputerChoice();

		playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
		
		if(playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Rock' && computerSelection === 'Scissors' )	{
			console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
			return 1;
		}else if(playerSelection === computerSelection){
			console.log('Draw. On to the next one.');
			return 0;
		} else	{
			console.log(`You lost! ${playerSelection} lost against ${computerSelection}.`);
			return -1;
		}

		// if player win return 1
		// if draw return 0
		// if lose return -1
	}

//Sub-Problem 4

	function playGame()	{
		let counter = 0;
		let record = 0;
		while (counter < 5){
			record += playRound();
			counter++;
		}
		if(record > 0)	{
			console.log('You won! Congrats');
		}else if(record === 0)	{
			console.log('It is a draw');
		}else	{
			console.log('You lost. Try again!')
		}
	}

