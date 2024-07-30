/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Rock Paper Scissor
@author: yash
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
      //console.log('It\'s a tie!');
    return 2;
  }
  if (
        (playerChoice === 'r' && computerChoice === 's') ||
      (playerChoice === 'p' && computerChoice === 'r') ||
      (playerChoice === 's' && computerChoice === 'p')
  ) {
      ////console.log('You win!');
    return 1;
  }
//console.log('com win!');
return 0;
}

let guess = getComputerChoice();

// define the sprites in our game
const rock = "r";
const paper = "p";
const scissor = "s";
const slider = "w";
const rock_name = "1";
const rock_name2 = "2";
const paper_name = "3";
const paper_name2 = "4";
const scissior_name = "5";
const scissior_name2 = "6";
const tie = "7";
const win = "8";
const loss = "9";
const slider2 = "a";

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
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
................
................
................
................
................
................
................
................
................`],
[ slider2, bitmap`
................
................
................
0000000000000000
................
................
................
................
................
................
................
................
................
................
................
................`],  
[ rock_name, bitmap`
................
................
LLLL.LLLL.LLL.L.
L..L.L..L.L...L.
L..L.L..L.L...L.
L..L.L..L.L...L.
LLLL.L..L.L...LL
LLL..L..L.L...L.
L.LL.L..L.L...L.
L..L.L..L.L...L.
L..L.LLLL.LLL.L.
................
................
................
................
................`],
[ rock_name2, bitmap`
................
................
.L..............
.L..............
L...............
L...............
................
L...............
L...............
.L..............
.L..............
................
................
................
................
................`],
[ paper_name, bitmap`
................
................
1111.11111.1111.
1..1.1...1.1..1.
1..1.1...1.1..1.
1..1.1...1.1..1.
1111.1...1.1..1.
1....11111.1111.
1....1...1.1....
1....1...1.1....
1....1...1.1....
1....1...1.1....
1....1...1.1....
................
................
................`],
[ paper_name2, bitmap`
................
................
11111.111111....
1.....1....1....
1.....1....1....
1.....1....1....
1.....1....1....
1111..111111....
1.....111.......
1.....1.111.....
1.....1...1.....
1.....1...11....
11111.1....1....
................
................
................`],
[ scissior_name, bitmap`
................
................
................
LLLL.LLLL.L.LLLL
L..L.L....L.L..L
L....L....L.L...
L....L....L.L...
L....L....L.L...
LLLL.L....L.LLLL
...L.L....L....L
...L.L....L....L
L..L.L....L.L..L
LLLL.LLLL.L.LLLL
................
................
................`],
[ scissior_name2, bitmap`
................
................
.LLLL.LLLL.LLLL.
.L..L.L..L.L..L.
.L....L..L.L..L.
.L....L..L.L..L.
.L....L..L.L..L.
.LLLL.L..L.LLLL.
....L.L..L.LLL..
....L.L..L.L.L..
....L.L..L.L.LL.
.L..L.L..L.L..L.
.LLLL.LLLL.L..L.
................
................
................`],
[ tie, bitmap`
00000000.....3.3
....0.........3.
....0........333
....0...........
....0...0.......
....0...0.......
....0...0.......
....0...0..00000
....0...0..0...0
....0...0..0....
........0..0....
........0..000..
...........0....
...........0...0
...........0...0
...........00000`],
[ win, bitmap`
0.....0.........
0.....0.....3..3
0.....0.........
0.....0.........
0..0..00.0..3..3
0..0..0000..3333
0..0..0.00.....0
0000000.0...0..0
........0...00.0
........0...00.0
........0...00.0
........0...0000
.......0000.0.00
......00..0.0.00
............0..0
............0..0`],
[ loss, bitmap`
0...............
0...0000........
0...0000.LLLL.2.
0...0HH0.L..L...
0...0HH0.L......
0...0HH0.L...LLL
0...0HH0.LLL.L.L
0...0000...L.L..
0..........L.L..
0000....L..L.LLL
........L.LL...L
........LLLL...L
...............L
............L..L
............LLLL
................`],
  
);
const sprite = getFirst(slider);
let playerchoice = "p";
// Function for movement when 's' or 'ArrowLeft' key is pressed
function moveLeft() {
  const sprite = getFirst(slider);
  const minPosition = 0; // Assuming the minimum x-coordinate position

  // Check if moving left will exceed the border
  if (sprite.x - 2 >= minPosition) {
    sprite.x -= 2; // move sprite left
    playerchoice = 'r';
    clearText();
    print()
  }
}
let direction = 1; // Initialize direction of movement (1 for right, -1 for left)
const maxPositionSlider2 = width() - 1; // Set the maximum position of slider2

// Function for continuous movement of slider2
function moveSlider2() {
    const spriteSlider2 = getFirst(slider2);

    if (spriteSlider2) {
        // Check if slider2 reaches the boundary, change direction if necessary
        if (spriteSlider2.x + direction >= maxPositionSlider2) {
            direction = -1; // Change direction to move left
        } else if (spriteSlider2.x + direction < 0) {
            direction = 1; // Change direction to move right
        }

        // Move the slider2 sprite based on the current direction
        spriteSlider2.x += direction;

        // Implement any other logic related to slider2 movement here
    }
}
// Call moveSlider2 function in a loop for continuous movement
let intervalId = setInterval(moveSlider2, 900); // Adjust the interval as needed (100ms in this example)

// Function for movement when 'd' or 'ArrowRight' key is pressed
function moveRight() {
  const sprite = getFirst(slider);
  const maxPosition = width() - 1; // Assuming the width of the game screen

  // Check if moving right will exceed the border
  if (sprite.x + 2 <= maxPosition) {
    sprite.x += 2; // move sprite right
    playerchoice = 's';
  }
}

function print() {
  addText(guess, {x:1, y:2, color:color`3`});
  addText(playerchoice, {x:1, y:3, color:color`3`});
}


let level = 0;
setSolids([rock, paper, scissor]);


const levels = [
map`
.123456
.a.....
.r.p.s.
...w...
.......`,
map`
.123456
.......
.r.p.s.
...9...
.......`,
map`
.123456
.......
.r.p.s.
...8...
.......`,
map`
.123456
.......
.r.p.s.
...7...
.......`,
  
]

setMap(levels[level])




// Inputs for player movement control
onInput("a", moveLeft);
onInput("w", moveLeft);

onInput("d", moveRight);
onInput("s", moveRight);

function instructions() {
addText("Press s for right ", {x:2, y:3, color:color`3`});
addText("Press d for left ", {x:2, y:4, color:color`3`});
addText("Press J to Select ", {x:2, y:13, color:color`3`});
}

// enter
onInput("j", () => {
  let winner = determineWinner(playerchoice, guess);
  if (winner == 0) {
    level = 1;
  addText("Computer Win", {x:1, y:7, color:color`3`});
  } 
  else if (winner == 1) {
    level = 2;// print you win on screen
    addText("You Win", {x:1, y:8, color:color`3`});
  } 
  else if (winner == 2){
    level = 3;// print tie
    addText("Tie ", {x:3, y:9, color:color`3`});
  }
  setMap(levels[level]);
  addText("Press K to restart ", {x:1, y:4, color:color`3`});
});

//restart
onInput("k", () => {
  guess = getComputerChoice();
  setMap(levels[0]);
});
  


afterInput(() => {
    const sprite = getFirst(slider);

    // Check if 'sprite' is defined before accessing its properties
    if (sprite) {
        // Check the position of the slider and update playerchoice accordingly
        if (sprite.x === 1) {
            playerchoice = 'r';
            clearText();
            print();
        } else if (sprite.x === 3) {
            playerchoice = 'p';
            clearText();
            print();
        } else if (sprite.x === 5) {
            playerchoice = 's';
            clearText();
            print();
        }
    } else {
        console.log("Slider sprite is undefined.");
    }
});