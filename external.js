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


// Global Vars

let scorePlayer = 0;
let scoreComp = 0;


//Sub-Problem 1

	function getComputerChoice()	{
		let randomCounter = Math.floor(Math.random()*3);
		const computerSelection = ['Rock', 'Paper', 'Scissors'];
		return computerSelection[randomCounter];
}
//Sub-Problem 2

	function playRound()	{

		let computerSelection = getComputerChoice();

		// Results Div
		const results = document.querySelector('#results');
		const content = document.querySelector('#whoWon');

		// Score Div
		const score = document.querySelector('#score');
		const playerScore = document.querySelector('#playerScore');
		const computerScore = document.querySelector('#computerScore');
		
		// Logic
		if(playerSelection === 'Paper' && computerSelection === 'Rock' || playerSelection === 'Scissors' && computerSelection === 'Paper' || playerSelection === 'Rock' && computerSelection === 'Scissors' )	{
			content.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
			scorePlayer++;
			playerScore.textContent = `Player score is: ${scorePlayer}`;
			playerScore.replaceWith(playerScore);
		}else if(playerSelection === computerSelection){
			content.textContent = 'Draw. Next round!';
		} else	{
			content.textContent = `You lost. ${playerSelection} lost against ${computerSelection}`;
			scoreComp++;
			computerScore.textContent = `Computer score is: ${scoreComp}`;
			computerScore.replaceWith(computerScore);
		}
		results.appendChild(content);

		// div main-container

		let mainC = document.querySelector('#main-container');
		let endP = document.createElement('p');

		if (scorePlayer === 5)	{
			endP.textContent = 'Well done, you have won!'
			mainC.replaceWith(endP);
			let a = document.createElement('a');
			a.setAttribute('href', 'http://127.0.0.1:5500/index.html');
			a.textContent = 'Go again';
			document.getElementsByTagName('body')[0].appendChild(a);
		} else if (scoreComp === 5)	{
			endP.textContent = 'Well mate, this time you lost! Go again.'
			mainC.replaceWith(endP);
			let a = document.createElement('a');
			a.setAttribute('href', 'http://127.0.0.1:5500/index.html');
			a.textContent = 'Try again';
			document.getElementsByTagName('body')[0].appendChild(a);
		}
	}

	// Adding UI Stuff

	const buttons = document.querySelectorAll('button');
	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			playerSelection = button.textContent;
			playRound();
		});
	});

