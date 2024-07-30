/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Rock Paper Scissor
@author: 
@tags: []
@addedOn: 2024-00-00
*/
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log('It\'s a tie!');
      return 2;
    }
    if (
        (playerChoice === 'r' && computerChoice === 's') ||
        (playerChoice === 'p' && computerChoice === 'r') ||
        (playerChoice === 's' && computerChoice === 'p')
    ) {
        console.log('You win!');
      return 1;
    }
    console.log('com win!');
  return 0;
}

const guess = getComputerChoice();

// define the sprites in our game
const rock = "r";
const paper = "p";
const scissor = "s";
const slider = "w";

// assign bitmap art to each sprite
setLegend(
  [ rock, bitmap`
................
................
................
........00000...
......00111C00..
.....001CCCC10..
.....01C1CC0100.
.....0CCCCC1110.
.....0111C1CC10.
.....0111CC1110.
...CCC0011C1100.
...CCCCCCCCCC0..
...C......000...
...C............
................
................`],
  [ paper, bitmap`
................
................
................
...88888888888..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...82222222228..
...88888888888..
................
................`],
  [ scissor, bitmap`
................
...1........1...
....1......1....
....1......1....
.....1....1.....
......1..1......
......1..1......
.......00.......
...1111111......
..11..11111.....
...11.1.1.1.....
....1.1.1111....
...1..11..11....
...11111........
................
................`],
  [ slider, bitmap`
................
................
................
................
................
................
................
................
................
....1111........
................
................
................
................
................
................`]
);

let playerchoice = 'r';
// inputs for player movement control
onInput("s", () => {
  getFirst(slider).x -= 1;// move slider left
});

onInput("d", () => {
  getFirst(slider).x += 1; //move it right
});

// enter
onInput("j", () => {
  let winner = determineWinner(guess, playerchoice);
  //do somethingon screen
});



setSolids([rock, paper, scissor]);

let level = 0
const levels = [
  map`
p.r.s.......
..w.........
............
............
............
............`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})