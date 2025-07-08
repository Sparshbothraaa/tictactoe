// HTML Variable Declaration

// Tic-Tac-Toe Large
const tableMain = document.getElementById("tableMain");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");
const table5 = document.getElementById("table5");
const table6 = document.getElementById("table6");
const table7 = document.getElementById("table7");
const table8 = document.getElementById("table8");
const table9 = document.getElementById("table9");



const cells = {
    minigridWins: 0,
    // First Mini-Grid/ Table
    one: {
      movesInGrid: 0,
      gridStatus: "",
      row: 0,
      col: 0,
      one: { location: document.getElementById("one-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("one-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("one-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("one-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("one-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("one-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("one-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("one-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("one-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Second Mini-Grid/ Table
    two: {
      movesInGrid: 0,
      gridStatus: "",
      row: 0,
      col: 1,
      one: { location: document.getElementById("two-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("two-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("two-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("two-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("two-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("two-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("two-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("two-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("two-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Third Mini-Grid/ Table
    three: {
      movesInGrid: 0,
      gridStatus: "",
      row: 0,
      col: 2,
      one: { location: document.getElementById("three-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("three-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("three-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("three-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("three-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("three-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("three-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("three-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("three-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Fourth Mini-Grid/ Table
    four: {
      movesInGrid: 0,
      gridStatus: "",
      row: 1,
      col: 0,
      one: { location: document.getElementById("four-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("four-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("four-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("four-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("four-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("four-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("four-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("four-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("four-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Fifth Mini-Grid/ Table
    five: {
      movesInGrid: 0,
      gridStatus: "",
      row: 1,
      col: 1,
      one: { location: document.getElementById("five-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("five-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("five-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("five-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("five-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("five-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("five-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("five-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("five-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Sixth Mini-Grid/ Table
    six: {
      movesInGrid: 0,
      gridStatus: "",
      row: 1,
      col: 2,
      one: { location: document.getElementById("six-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("six-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("six-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("six-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("six-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("six-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("six-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("six-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("six-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Seventh Mini-Grid/ Table
    seven: {
      movesInGrid: 0,
      gridStatus: "",
      row: 2,
      col: 0,
      one: { location: document.getElementById("seven-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("seven-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("seven-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("seven-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("seven-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("seven-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("seven-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("seven-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("seven-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Eighth Mini-Grid/ Table
    eight: {
      movesInGrid: 0,
      gridStatus: "",
      row: 2,
      col: 1,
      one: { location: document.getElementById("eight-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("eight-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("eight-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("eight-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("eight-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("eight-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("eight-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("eight-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("eight-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    },
  
    // Ninth Mini-Grid/ Table
    nine: {
      movesInGrid: 0,
      gridStatus: "",
      row: 2,
      col: 2,
      one: { location: document.getElementById("nine-one"), played: false, row: 0, col: 0, playerMoved: '' },
      two: { location: document.getElementById("nine-two"), played: false, row: 0, col: 1, playerMoved: '' },
      three: { location: document.getElementById("nine-three"), played: false, row: 0, col: 2, playerMoved: '' },
      four: { location: document.getElementById("nine-four"), played: false, row: 1, col: 0, playerMoved: '' },
      five: { location: document.getElementById("nine-five"), played: false, row: 1, col: 1, playerMoved: '' },
      six: { location: document.getElementById("nine-six"), played: false, row: 1, col: 2, playerMoved: '' },
      seven: { location: document.getElementById("nine-seven"), played: false, row: 2, col: 0, playerMoved: '' },
      eight: { location: document.getElementById("nine-eight"), played: false, row: 2, col: 1, playerMoved: '' },
      nine: { location: document.getElementById("nine-nine"), played: false, row: 2, col: 2, playerMoved: '' }
    }
  };

  

// HTML Element Variables

const Start = document.getElementById("gameStart");
const currentMove = document.getElementById("currentMove");
const winner = document.getElementById("winner");


// Condition Variables

let turnOptions = ["X", "O"];
let playerTurn;
let nextMiniBox = "";

let illegalMovesX = 0;
let illegalMovesO = 0;


// Game Start Function
let firstMove;

let myInterval;

function gameStart() {
  emptyBoard();
  outcome.style.display = "none";
  playerTurn = "";
  if (Math.random() >= 0.5) {
    playerTurn = turnOptions[0];
    firstMove = playerTurn;
    currentMove.textContent = `Current Move: ${playerTurn}`;
  } else {
    playerTurn = turnOptions[1];
    firstMove = playerTurn;
    currentMove.textContent = `Current Move: ${playerTurn}`;
  }
  initiateEventListeners();
  gameStartA.play();
  myInterval = setInterval(updatePlayerTime, 1000);
  resign.addEventListener("click", function() {
    gameEnd("resign");
  });
}

Start.addEventListener("click", gameStart);

function emptyBoard() {
  for (let grid in cells) {
    if (grid !== "minigridWins" && cells[grid].gridStatus !== undefined && cells[grid].movesInGrid !== undefined) {
      cells[grid].gridStatus = "";
      cells[grid].movesInGrid = 0;
      for (let cell in cells[grid]) {
        if (cell !== "movesInGrid" && cell !== "gridStatus" && cells[grid][cell].played !== undefined) {
          cells[grid][cell].played = false;
          cells[grid][cell].playerMoved = "";
          cells[grid][cell].location.textContent = "";
        }
      }
    }
  }

  cells.minigridWins = 0;
  console.log("Board reset complete");
}


// Initiate Move eventListeners 

function initiateEventListeners() {
  //First Mini-Grid/ Table
  cells.one.one.location.addEventListener("click", function() { playMove('one', 'one'); });
  cells.one.two.location.addEventListener("click", function() { playMove('one', 'two'); });
  cells.one.three.location.addEventListener("click", function() { playMove('one', 'three'); });
  cells.one.four.location.addEventListener("click", function() { playMove('one', 'four'); });
  cells.one.five.location.addEventListener("click", function() { playMove('one', 'five'); });
  cells.one.six.location.addEventListener("click", function() { playMove('one', 'six'); });
  cells.one.seven.location.addEventListener("click", function() { playMove('one', 'seven'); });
  cells.one.eight.location.addEventListener("click", function() { playMove('one', 'eight'); });
  cells.one.nine.location.addEventListener("click", function() { playMove('one', 'nine'); });

  // Second Mini-Grid/ Table
  cells.two.one.location.addEventListener("click", function() { playMove('two', 'one'); });
  cells.two.two.location.addEventListener("click", function() { playMove('two', 'two'); });
  cells.two.three.location.addEventListener("click", function() { playMove('two', 'three'); });
  cells.two.four.location.addEventListener("click", function() { playMove('two', 'four'); });
  cells.two.five.location.addEventListener("click", function() { playMove('two', 'five'); });
  cells.two.six.location.addEventListener("click", function() { playMove('two', 'six'); });
  cells.two.seven.location.addEventListener("click", function() { playMove('two', 'seven'); });
  cells.two.eight.location.addEventListener("click", function() { playMove('two', 'eight'); });
  cells.two.nine.location.addEventListener("click", function() { playMove('two', 'nine'); });

  // Third Mini-Grid/ Table
  cells.three.one.location.addEventListener("click", function() { playMove('three', 'one'); });
  cells.three.two.location.addEventListener("click", function() { playMove('three', 'two'); });
  cells.three.three.location.addEventListener("click", function() { playMove('three', 'three'); });
  cells.three.four.location.addEventListener("click", function() { playMove('three', 'four'); });
  cells.three.five.location.addEventListener("click", function() { playMove('three', 'five'); });
  cells.three.six.location.addEventListener("click", function() { playMove('three', 'six'); });
  cells.three.seven.location.addEventListener("click", function() { playMove('three', 'seven'); });
  cells.three.eight.location.addEventListener("click", function() { playMove('three', 'eight'); });
  cells.three.nine.location.addEventListener("click", function() { playMove('three', 'nine'); });

  // Fourth Mini-Grid/ Table
  cells.four.one.location.addEventListener("click", function() { playMove('four', 'one'); });
  cells.four.two.location.addEventListener("click", function() { playMove('four', 'two'); });
  cells.four.three.location.addEventListener("click", function() { playMove('four', 'three'); });
  cells.four.four.location.addEventListener("click", function() { playMove('four', 'four'); });
  cells.four.five.location.addEventListener("click", function() { playMove('four', 'five'); });
  cells.four.six.location.addEventListener("click", function() { playMove('four', 'six'); });
  cells.four.seven.location.addEventListener("click", function() { playMove('four', 'seven'); });
  cells.four.eight.location.addEventListener("click", function() { playMove('four', 'eight'); });
  cells.four.nine.location.addEventListener("click", function() { playMove('four', 'nine'); });

  // Fifth Mini-Grid/ Table
  cells.five.one.location.addEventListener("click", function() { playMove('five', 'one'); });
  cells.five.two.location.addEventListener("click", function() { playMove('five', 'two'); });
  cells.five.three.location.addEventListener("click", function() { playMove('five', 'three'); });
  cells.five.four.location.addEventListener("click", function() { playMove('five', 'four'); });
  cells.five.five.location.addEventListener("click", function() { playMove('five', 'five'); });
  cells.five.six.location.addEventListener("click", function() { playMove('five', 'six'); });
  cells.five.seven.location.addEventListener("click", function() { playMove('five', 'seven'); });
  cells.five.eight.location.addEventListener("click", function() { playMove('five', 'eight'); });
  cells.five.nine.location.addEventListener("click", function() { playMove('five', 'nine'); });

  // Sixth Mini-Grid/ Table
  cells.six.one.location.addEventListener("click", function() { playMove('six', 'one'); });
  cells.six.two.location.addEventListener("click", function() { playMove('six', 'two'); });
  cells.six.three.location.addEventListener("click", function() { playMove('six', 'three'); });
  cells.six.four.location.addEventListener("click", function() { playMove('six', 'four'); });
  cells.six.five.location.addEventListener("click", function() { playMove('six', 'five'); });
  cells.six.six.location.addEventListener("click", function() { playMove('six', 'six'); });
  cells.six.seven.location.addEventListener("click", function() { playMove('six', 'seven'); });
  cells.six.eight.location.addEventListener("click", function() { playMove('six', 'eight'); });
  cells.six.nine.location.addEventListener("click", function() { playMove('six', 'nine'); });

  // Seventh Mini-Grid/ Table
  cells.seven.one.location.addEventListener("click", function() { playMove('seven', 'one'); });
  cells.seven.two.location.addEventListener("click", function() { playMove('seven', 'two'); });
  cells.seven.three.location.addEventListener("click", function() { playMove('seven', 'three'); });
  cells.seven.four.location.addEventListener("click", function() { playMove('seven', 'four'); });
  cells.seven.five.location.addEventListener("click", function() { playMove('seven', 'five'); });
  cells.seven.six.location.addEventListener("click", function() { playMove('seven', 'six'); });
  cells.seven.seven.location.addEventListener("click", function() { playMove('seven', 'seven'); });
  cells.seven.eight.location.addEventListener("click", function() { playMove('seven', 'eight'); });
  cells.seven.nine.location.addEventListener("click", function() { playMove('seven', 'nine'); });

  // Eighth Mini-Grid/ Table
  cells.eight.one.location.addEventListener("click", function() { playMove('eight', 'one'); });
  cells.eight.two.location.addEventListener("click", function() { playMove('eight', 'two'); });
  cells.eight.three.location.addEventListener("click", function() { playMove('eight', 'three'); });
  cells.eight.four.location.addEventListener("click", function() { playMove('eight', 'four'); });
  cells.eight.five.location.addEventListener("click", function() { playMove('eight', 'five'); });
  cells.eight.six.location.addEventListener("click", function() { playMove('eight', 'six'); });
  cells.eight.seven.location.addEventListener("click", function() { playMove('eight', 'seven'); });
  cells.eight.eight.location.addEventListener("click", function() { playMove('eight', 'eight'); });
  cells.eight.nine.location.addEventListener("click", function() { playMove('eight', 'nine'); });

  // Ninth Mini-Grid/ Table
  cells.nine.one.location.addEventListener("click", function() { playMove('nine', 'one'); });
  cells.nine.two.location.addEventListener("click", function() { playMove('nine', 'two'); });
  cells.nine.three.location.addEventListener("click", function() { playMove('nine', 'three'); });
  cells.nine.four.location.addEventListener("click", function() { playMove('nine', 'four'); });
  cells.nine.five.location.addEventListener("click", function() { playMove('nine', 'five'); });
  cells.nine.six.location.addEventListener("click", function() { playMove('nine', 'six'); });
  cells.nine.seven.location.addEventListener("click", function() { playMove('nine', 'seven'); });
  cells.nine.eight.location.addEventListener("click", function() { playMove('nine', 'eight'); });
  cells.nine.nine.location.addEventListener("click", function() { playMove('nine', 'nine'); });
}

  function deInitiateEventListeners() {

    // First Mini-Grid/ Table
    cells.one.one.location.removeEventListener("click", function() { playMove('one', 'one'); });
    cells.one.two.location.removeEventListener("click", function() { playMove('one', 'two'); });
    cells.one.three.location.removeEventListener("click", function() { playMove('one', 'three'); });
    cells.one.four.location.removeEventListener("click", function() { playMove('one', 'four'); });
    cells.one.five.location.removeEventListener("click", function() { playMove('one', 'five'); });
    cells.one.six.location.removeEventListener("click", function() { playMove('one', 'six'); });
    cells.one.seven.location.removeEventListener("click", function() { playMove('one', 'seven'); });
    cells.one.eight.location.removeEventListener("click", function() { playMove('one', 'eight'); });
    cells.one.nine.location.removeEventListener("click", function() { playMove('one', 'nine'); });
  
    // Second Mini-Grid/ Table
    cells.two.one.location.removeEventListener("click", function() { playMove('two', 'one'); });
    cells.two.two.location.removeEventListener("click", function() { playMove('two', 'two'); });
    cells.two.three.location.removeEventListener("click", function() { playMove('two', 'three'); });
    cells.two.four.location.removeEventListener("click", function() { playMove('two', 'four'); });
    cells.two.five.location.removeEventListener("click", function() { playMove('two', 'five'); });
    cells.two.six.location.removeEventListener("click", function() { playMove('two', 'six'); });
    cells.two.seven.location.removeEventListener("click", function() { playMove('two', 'seven'); });
    cells.two.eight.location.removeEventListener("click", function() { playMove('two', 'eight'); });
    cells.two.nine.location.removeEventListener("click", function() { playMove('two', 'nine'); });
  
    // Third Mini-Grid/ Table
    cells.three.one.location.removeEventListener("click", function() { playMove('three', 'one'); });
    cells.three.two.location.removeEventListener("click", function() { playMove('three', 'two'); });
    cells.three.three.location.removeEventListener("click", function() { playMove('three', 'three'); });
    cells.three.four.location.removeEventListener("click", function() { playMove('three', 'four'); });
    cells.three.five.location.removeEventListener("click", function() { playMove('three', 'five'); });
    cells.three.six.location.removeEventListener("click", function() { playMove('three', 'six'); });
    cells.three.seven.location.removeEventListener("click", function() { playMove('three', 'seven'); });
    cells.three.eight.location.removeEventListener("click", function() { playMove('three', 'eight'); });
    cells.three.nine.location.removeEventListener("click", function() { playMove('three', 'nine'); });
  
    // Fourth Mini-Grid/ Table
    cells.four.one.location.removeEventListener("click", function() { playMove('four', 'one'); });
    cells.four.two.location.removeEventListener("click", function() { playMove('four', 'two'); });
    cells.four.three.location.removeEventListener("click", function() { playMove('four', 'three'); });
    cells.four.four.location.removeEventListener("click", function() { playMove('four', 'four'); });
    cells.four.five.location.removeEventListener("click", function() { playMove('four', 'five'); });
    cells.four.six.location.removeEventListener("click", function() { playMove('four', 'six'); });
    cells.four.seven.location.removeEventListener("click", function() { playMove('four', 'seven'); });
    cells.four.eight.location.removeEventListener("click", function() { playMove('four', 'eight'); });
    cells.four.nine.location.removeEventListener("click", function() { playMove('four', 'nine'); });
  
    // Fifth Mini-Grid/ Table
    cells.five.one.location.removeEventListener("click", function() { playMove('five', 'one'); });
    cells.five.two.location.removeEventListener("click", function() { playMove('five', 'two'); });
    cells.five.three.location.removeEventListener("click", function() { playMove('five', 'three'); });
    cells.five.four.location.removeEventListener("click", function() { playMove('five', 'four'); });
    cells.five.five.location.removeEventListener("click", function() { playMove('five', 'five'); });
    cells.five.six.location.removeEventListener("click", function() { playMove('five', 'six'); });
    cells.five.seven.location.removeEventListener("click", function() { playMove('five', 'seven'); });
    cells.five.eight.location.removeEventListener("click", function() { playMove('five', 'eight'); });
    cells.five.nine.location.removeEventListener("click", function() { playMove('five', 'nine'); });
  
    // Sixth Mini-Grid/ Table
    cells.six.one.location.removeEventListener("click", function() { playMove('six', 'one'); });
    cells.six.two.location.removeEventListener("click", function() { playMove('six', 'two'); });
    cells.six.three.location.removeEventListener("click", function() { playMove('six', 'three'); });
    cells.six.four.location.removeEventListener("click", function() { playMove('six', 'four'); });
    cells.six.five.location.removeEventListener("click", function() { playMove('six', 'five'); });
    cells.six.six.location.removeEventListener("click", function() { playMove('six', 'six'); });
    cells.six.seven.location.removeEventListener("click", function() { playMove('six', 'seven'); });
    cells.six.eight.location.removeEventListener("click", function() { playMove('six', 'eight'); });
    cells.six.nine.location.removeEventListener("click", function() { playMove('six', 'nine'); });
  
    // Seventh Mini-Grid/ Table
    cells.seven.one.location.removeEventListener("click", function() { playMove('seven', 'one'); });
    cells.seven.two.location.removeEventListener("click", function() { playMove('seven', 'two'); });
    cells.seven.three.location.removeEventListener("click", function() { playMove('seven', 'three'); });
    cells.seven.four.location.removeEventListener("click", function() { playMove('seven', 'four'); });
    cells.seven.five.location.removeEventListener("click", function() { playMove('seven', 'five'); });
    cells.seven.six.location.removeEventListener("click", function() { playMove('seven', 'six'); });
    cells.seven.seven.location.removeEventListener("click", function() { playMove('seven', 'seven'); });
    cells.seven.eight.location.removeEventListener("click", function() { playMove('seven', 'eight'); });
    cells.seven.nine.location.removeEventListener("click", function() { playMove('seven', 'nine'); });
  
    // Eighth Mini-Grid/ Table
    cells.eight.one.location.removeEventListener("click", function() { playMove('eight', 'one'); });
    cells.eight.two.location.removeEventListener("click", function() { playMove('eight', 'two'); });
    cells.eight.three.location.removeEventListener("click", function() { playMove('eight', 'three'); });
    cells.eight.four.location.removeEventListener("click", function() { playMove('eight', 'four'); });
    cells.eight.five.location.removeEventListener("click", function() { playMove('eight', 'five'); });
    cells.eight.six.location.removeEventListener("click", function() { playMove('eight', 'six'); });
    cells.eight.seven.location.removeEventListener("click", function() { playMove('eight', 'seven'); });
    cells.eight.eight.location.removeEventListener("click", function() { playMove('eight', 'eight'); });
    cells.eight.nine.location.removeEventListener("click", function() { playMove('eight', 'nine'); });
  
    // Ninth Mini-Grid/ Table
    cells.nine.one.location.removeEventListener("click", function() { playMove('nine', 'one'); });
    cells.nine.two.location.removeEventListener("click", function() { playMove('nine', 'two'); });
    cells.nine.three.location.removeEventListener("click", function() { playMove('nine', 'three'); });
    cells.nine.four.location.removeEventListener("click", function() { playMove('nine', 'four'); });
    cells.nine.five.location.removeEventListener("click", function() { playMove('nine', 'five'); });
    cells.nine.six.location.removeEventListener("click", function() { playMove('nine', 'six'); });
    cells.nine.seven.location.removeEventListener("click", function() { playMove('nine', 'seven'); });
    cells.nine.eight.location.removeEventListener("click", function() { playMove('nine', 'eight'); });
    cells.nine.nine.location.removeEventListener("click", function() { playMove('nine', 'nine'); });



    const cells = {
      minigridWins: 0,
      // First Mini-Grid/ Table
      one: {
        movesInGrid: 0,
        gridStatus: "",
        row: 0,
        col: 0,
        one: { location: document.getElementById("one-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("one-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("one-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("one-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("one-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("one-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("one-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("one-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("one-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Second Mini-Grid/ Table
      two: {
        movesInGrid: 0,
        gridStatus: "",
        row: 0,
        col: 1,
        one: { location: document.getElementById("two-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("two-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("two-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("two-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("two-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("two-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("two-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("two-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("two-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Third Mini-Grid/ Table
      three: {
        movesInGrid: 0,
        gridStatus: "",
        row: 0,
        col: 2,
        one: { location: document.getElementById("three-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("three-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("three-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("three-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("three-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("three-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("three-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("three-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("three-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Fourth Mini-Grid/ Table
      four: {
        movesInGrid: 0,
        gridStatus: "",
        row: 1,
        col: 0,
        one: { location: document.getElementById("four-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("four-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("four-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("four-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("four-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("four-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("four-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("four-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("four-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Fifth Mini-Grid/ Table
      five: {
        movesInGrid: 0,
        gridStatus: "",
        row: 1,
        col: 1,
        one: { location: document.getElementById("five-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("five-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("five-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("five-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("five-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("five-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("five-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("five-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("five-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Sixth Mini-Grid/ Table
      six: {
        movesInGrid: 0,
        gridStatus: "",
        row: 1,
        col: 2,
        one: { location: document.getElementById("six-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("six-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("six-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("six-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("six-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("six-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("six-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("six-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("six-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Seventh Mini-Grid/ Table
      seven: {
        movesInGrid: 0,
        gridStatus: "",
        row: 2,
        col: 0,
        one: { location: document.getElementById("seven-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("seven-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("seven-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("seven-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("seven-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("seven-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("seven-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("seven-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("seven-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Eighth Mini-Grid/ Table
      eight: {
        movesInGrid: 0,
        gridStatus: "",
        row: 2,
        col: 1,
        one: { location: document.getElementById("eight-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("eight-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("eight-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("eight-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("eight-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("eight-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("eight-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("eight-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("eight-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      },
    
      // Ninth Mini-Grid/ Table
      nine: {
        movesInGrid: 0,
        gridStatus: "",
        row: 2,
        col: 2,
        one: { location: document.getElementById("nine-one"), played: false, row: 0, col: 0, playerMoved: '' },
        two: { location: document.getElementById("nine-two"), played: false, row: 0, col: 1, playerMoved: '' },
        three: { location: document.getElementById("nine-three"), played: false, row: 0, col: 2, playerMoved: '' },
        four: { location: document.getElementById("nine-four"), played: false, row: 1, col: 0, playerMoved: '' },
        five: { location: document.getElementById("nine-five"), played: false, row: 1, col: 1, playerMoved: '' },
        six: { location: document.getElementById("nine-six"), played: false, row: 1, col: 2, playerMoved: '' },
        seven: { location: document.getElementById("nine-seven"), played: false, row: 2, col: 0, playerMoved: '' },
        eight: { location: document.getElementById("nine-eight"), played: false, row: 2, col: 1, playerMoved: '' },
        nine: { location: document.getElementById("nine-nine"), played: false, row: 2, col: 2, playerMoved: '' }
      }
    };
}

// Play Move Function

const playerMoveA = new Audio('audio/move-self.mp3');
const opponentMoveA = new Audio('audio/move-opponent.webm');
const minigridCaptureA = new Audio('audio/capture.mp3');
const gameStartA = new Audio('audio/game-start.webm');
const gameEndA = new Audio('audio/game-end.webm');
const lowTimeA = new Audio('audio/tenseconds.webm');
const illegalMoveA = new Audio('audio/illegal.webm');

function playMove(minigrid, position) {
  if (nextMiniBox != "") {
    if(!cells[minigrid][position].played) {
      if(nextMiniBox == "any") {
        moveLogic(minigrid, position)
      }
      else {
        if(minigrid == nextMiniBox) {
          moveLogic(minigrid, position)
        }
        else {
          illegalMove();
        }
      }
    }
    else {
      illegalMove();
    }
  }
  else {
    nextMiniBox = position;
    cells[minigrid][position].location.textContent = playerTurn;
    cells[minigrid][position].playerMoved = playerTurn;
    cells[minigrid].movesInGrid += 1;
    cells[minigrid][position].played = true;
    playerMoveA.play();
    nextTurn();
  }
}



function moveLogic(minigrid, position) {
    if(cells[position].gridStatus == "") {
      nextMiniBox = position;
    }
    else {
      nextMiniBox = "any";
    }
    cells[minigrid][position].location.textContent = playerTurn;
    cells[minigrid][position].playerMoved = `${playerTurn}`;
    console.log(cells[minigrid][position].playerMoved);
    cells[minigrid][position].played = true;
    cells[minigrid].played = true;
    cells[minigrid].movesInGrid += 1;
    if(cells[minigrid].movesInGrid >= 3) {
      checkMiniWin(minigrid, position);
    }
    if(cells[minigrid].gridStatus == playerTurn) {
      minigridCaptureA.play();
    }
    else {
      if(playerTurn == firstMove) {
        playerMoveA.play();
      }
      else {
        opponentMoveA.play();
      }
    }

    if(playerTurn == firstMove) {
      timep1 += increment;
    }
    else {
      timep2 += increment;
    }
    nextTurn();
}



function nextTurn() {
  if(playerTurn == "X") {
    playerTurn = "O";
    currentMove.textContent = `Current Move: ${playerTurn}`;
  }
  else {
    playerTurn = "X";
    currentMove.textContent = `Current Move: ${playerTurn}`;
  }
}



// Functions (Win Box)

function checkMiniWin(minigrid, position) { // row win checking
  let row = cells[minigrid][position].row;
  let filteredCells = Object.values(cells[minigrid]).filter(cell => cell.row === row && cell.playerMoved !== '');
  let winCount = 0;
  for (let i = 0; i < 3; i++) {
    if(filteredCells[i] && filteredCells[i].playerMoved == playerTurn) {
      winCount++;
    }
    else {
      break
    }
  }
  
  if(winCount == 3) { 
    console.log(`${playerTurn} wins a minigrid`);
    claimMiniGrid(minigrid);
  }
  else { // column win checking
    winCount = 0;
    let col = cells[minigrid][position].col;
    filteredCells = Object.values(cells[minigrid]).filter(cell => cell.col === col && cell.playerMoved !== '');
    for (let i = 0; i < 3; i++) {
      if(filteredCells[i] && filteredCells[i].playerMoved == playerTurn) {
        winCount++;
      }
      else {
        break
      }
    }
    
    if(winCount == 3) {
      console.log(`${playerTurn} wins a minigrid`);
      claimMiniGrid(minigrid);
    }
    else { // diagonal win checking
      winCount = 0;
      let winCount2 = 0;
      filteredCells = Object.values(cells[minigrid]).filter(cell => cell.hasOwnProperty('row') && cell.hasOwnProperty('col'));
      for (let i = 0; i < 9; i++) {
        if (filteredCells[i].row === filteredCells[i].col && filteredCells[i].playerMoved === playerTurn) {
          winCount++;
        }
        if (filteredCells[i].row + filteredCells[i].col === 2 && filteredCells[i].playerMoved === playerTurn) {
          winCount2++;
        }
      }
      
      if(winCount == 3 || winCount2 == 3) {
        console.log(`${playerTurn} wins a minigrid`);
        claimMiniGrid(minigrid);
      }

    }
  }
}

function claimMiniGrid(minigrid) {
  cells[minigrid].gridStatus = playerTurn;
  filteredCells = Object.values(cells[minigrid]).filter(cell => cell.hasOwnProperty('row') && cell.hasOwnProperty('col'));
  for(item in filteredCells) {
    filteredCells[item].location.textContent = playerTurn;
    filteredCells[item].played = true;
    filteredCells[item].playerMoved = playerTurn;
  }
  cells.minigridWins += 1;
  if(cells.minigridWins > 2) {
    checkWin(minigrid);
  }
}


// Functions (Win Game)

  function checkWin(minigrid) {
    const filteredCells = Object.values(cells).filter(cell => cell.hasOwnProperty('gridStatus'));
    let winCount = 0;
    for (let k = 0; k < 3; k++) {
      for (let i = 0 + k; i - k < 3; i++) {
        if(filteredCells[i] && filteredCells[i].gridStatus == playerTurn) {
          winCount++;
        }
        else {
          break
        }
      }
    } 

    if(winCount == 3) { 
      console.log(`${playerTurn} wins the game!`);
      gameEnd("win");
    }
    else {
      winCount = 0;
      let filteredCells = Object.values(cells).filter(cell => cell.col === cells[minigrid].col && cell.gridStatus);
      for (let i = 0; i < 3; i++) {
        if(filteredCells[i] && filteredCells[i].gridStatus == playerTurn) {
          winCount++;
        }
        else {
          break
        }
      }
      if(winCount == 3) { 
        console.log(`${playerTurn} wins the game!`);
        gameEnd("win");
      }
      else {
        winCount = 0;
        let winCount2 = 0;
        filteredCells = Object.values(cells).filter(cell => cell.hasOwnProperty('row') && cell.hasOwnProperty('col'));
        for (let i = 0; i < 9; i++) {
          if (filteredCells[i].row === filteredCells[i].col && filteredCells[i].gridStatus === playerTurn) {
            winCount++;
          }
          if (filteredCells[i].row + filteredCells[i].col === 2 && filteredCells[i].gridStatus === playerTurn) {
            winCount2++;
          }

          if(winCount == 3 || winCount2 == 3) { 
            console.log(`${playerTurn} wins the game!`);
            gameEnd("win");
          }
      }
    }
  }
}


// Timer


const player1 = document.getElementById("player1Clock");
const player2 = document.getElementById("player2Clock");

let startingMinutes = 0;
let increment = 0;
let timep1 = 0;
let timep2 = 0;



let selectedOption = null;

function selectOption(option, buttonId) {
    selectedOption = option;
    document.getElementById('option1').classList.add('disabled');
    document.getElementById('option2').classList.add('disabled');
    document.getElementById('option3').classList.add('disabled');

    document.getElementById(buttonId).classList.remove('disabled');
}

function confirmSelection() {
  if (selectedOption) {
    console.log('working');
    if(selectedOption == "Option 1") {
      startingMinutes = 5;
      increment = 3;
    }
    else if(selectedOption == "Option 2") {
      startingMinutes = 3;
      increment = 2;
    }
    else {
      startingMinutes = 2;
      increment = 1;
    }

    timep1 = startingMinutes * 60;
    timep2 = startingMinutes * 60;

    document.getElementById('overlay').style.display = 'none';

  }
  else {
    alert("Please select an option before confirming.");
  }
}


function updatePlayerTime() {
  if(timep1 > -1 && timep2 > -1) {
    if(playerTurn == firstMove) {
      let minutes = Math.floor(timep1 / 60);
      let seconds = timep1 % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
    
      timep1--;
      
      player1.textContent = `Player 1 Clock: ${minutes} : ${seconds}`;

      if(timep1 == 59) {
        lowTimeA.play();
      }
    }
    else {
      let minutes = Math.floor(timep2 / 60);
      let seconds = timep2 % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      timep2--;

      player2.textContent = `Player 2 Clock: ${minutes} : ${seconds}`;
    
      if(timep2 == 59) {
        lowTimeA.play();
      }
    }
  }
  else {
    gameEnd("time");
  }
}


const resign = document.getElementById("resign");




  
// function gameEnd()

const outcome = document.getElementById("displayOverlay");

function gameEnd(cause) {
  clearInterval(myInterval);
  gameEndA.play();
  outcome.style.display = "block";
  if(cause == "time") {
    outcome.textContent = playerTurn + ' loses the game due to time';
  }
  else if(cause == "illegal") {
    outcome.textContent = playerTurn + ' loses the game due making 2 illegal moves';
  }
  else if(cause == "win") {
    outcome.textContent = playerTurn + ' wins the game';
  }
  else if(cause == "resign") {
    outcome.textContent = playerTurn + ' resigns the game';
  }

  currentMove.textContent = `Current Move: __`;

  illegalMovesX = 0;
  illegalMovesO = 0;

  nextMiniBox = "";

  timep1 = startingMinutes * 60;
  timep2 = startingMinutes * 60;

  deInitiateEventListeners();
}




// Illegal Move Function

function illegalMove() {
  if(playerTurn == "X") {
    if(illegalMovesX < 2) {
      illegalMovesX++;
    }
    else {
      gameEnd("illegal");
    }
  }
  else {
    if(illegalMovesO < 2) {
      illegalMovesO++;
    }
    else {
      gameEnd("illegal");
    }
  }
  console.log("illegal move");
}






