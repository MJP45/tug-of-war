// Tug of War game
// 2 * players
// assign names to players
// assign avatars to players
// create logic behind how the tug works on each side
// how does a player win
// game structure - contollable elements on page

// create boxes and rope
// move structure on keystroke (L&R)
// ensure 2 players can play
// boundary idea (winner)
// control zone with the width - what happens when you reach each side
// win logic
// point scoring
// game reset

// move structure on keystroke (L&R) // ensure 2 players can play


// add global score for each player

const rope = document.getElementById("box");
let leftDistance = 400;

const resetPosition = () => {
	leftDistance = 400;
	rope.style.left = leftDistance + "px";
};



const checkWinner = (distance) => {
	let winner = null;
	if (distance === 300) {
		alert("Tugging-heck, you Won!! Well done player 1 you're great at tugging!");
		winner = "player 1";
		resetPosition();
  } else if (distance === 600) {
		alert("Slow the tug down. Well done player 2 you're great at tugging - you won!");
		winner = "player2";
		resetPosition();
	}
	return winner;
}

const move = (keyCode) => {
	if (keyCode === 37) {
		leftDistance-=20;
		rope.style.backgroundColor = "purple";
	} else if (keyCode === 39) {
		leftDistance+=20;
		rope.style.backgroundColor = "green";
	}
	rope.style.left = leftDistance + "px";
	return leftDistance;
}


const onTug = (event) => {
	checkWinner(leftDistance);
	move(event.which);
}

document.addEventListener("keyup", onTug);
resetPosition();




// reset game call end of game alert with this fucntion 




// boundry winner creation
// work out number of vw needed to win when R/L has moved X vw R or L
// Define Player 1 = Left
// Define Player 2 = Right
// Define win = when object moves 15vw to the left or right
// creat alert saying, well done you're great at tugging - you won!
// every key stroke check if box position is in the correct coordinates.



