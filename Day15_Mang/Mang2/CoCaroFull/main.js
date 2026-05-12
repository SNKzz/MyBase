let rowInput = document.getElementById("input_row");
let colInput = document.getElementById("input_col");
let table = document.getElementById("table_caro");
const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;
let arrayCaro = [];
let lengthRowArray = 0;
let lengthColArray = 0;
let countTurn = 0;

function createTable() {
  let row = +rowInput.value;
  lengthRowArray = row;
  let col = +colInput.value;
  lengthColArray = col;
  let queriCreatingTable = "<table border='1' cellspacing = '0'>";

  for (let i = 0; i < row; i++) {
    arrayCaro[i] = [];
    queriCreatingTable += "<tr>";
    for (let j = 0; j < col; j++) {
      arrayCaro[i][j] = "*";
      let id_cell = i + "" + j;

      queriCreatingTable += `<td id="${id_cell}" onclick="clickCell('${id_cell}')"></td>`;
    }

    queriCreatingTable += "</tr>";
  }
  table.innerHTML = queriCreatingTable + "</table";
}

function checkRow(rowClicked, colClicked) {
  let countWin = 1;
  let arrayPositionScored = [];
  let arraySkip = [];
  arrayPositionScored[0] = rowClicked + "" + colClicked;

  while (countWin <= 5) {
    if (
      colClicked + countWin < lengthColArray &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked][colClicked + countWin]
    ) {
      let y = colClicked + countWin;
      arrayPositionScored[countWin] = rowClicked + "" + y;

      countWin++;
      continue;
    } else if (
      colClicked - countWin >= 0 &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked][colClicked - countWin]
    ) {
      let y = colClicked - countWin;
      arrayPositionScored[countWin] = rowClicked + "" + y;

      countWin++;
      continue;
    } else {
      break;
    }
  }
  if (countWin == 5) {
    return arrayPositionScored;
  } else {
    return arraySkip;
  }
}

function checkCol(rowClicked, colClicked) {
  let countWin = 1;
  let arrayPositionScored = [];
  let arraySkip = [];
  arrayPositionScored[0] = rowClicked + "" + colClicked;
  while (countWin <= 5) {
    if (
      rowClicked + countWin < lengthRowArray &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked + countWin][colClicked]
    ) {
      arrayPositionScored[countWin] = rowClicked + countWin + "" + colClicked;
      countWin++;
      continue;
    } else if (
      rowClicked - countWin >= 0 &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked - countWin][colClicked]
    ) {
      arrayPositionScored[countWin] = rowClicked - countWin + "" + colClicked;
      countWin++;
      continue;
    } else {
      break;
    }
  }
  if (countWin == 5) {
    return arrayPositionScored;
  } else {
    return arraySkip;
  }
}

function checkCrosslineLeftToRight(rowClicked, colClicked) {
  let countWin = 1;
  let arrayPositionScored = [];
  let arraySkip = [];
  arrayPositionScored[0] = rowClicked + "" + colClicked;
  while (countWin <= 5) {
    if (
      rowClicked + countWin < lengthRowArray &&
      colClicked + countWin < lengthColArray &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked + countWin][colClicked + countWin]
    ) {
      let x = rowClicked + countWin;
      let y = colClicked + countWin;
      arrayPositionScored[countWin] = x + "" + y;
      countWin++;
      continue;
    } else if (
      rowClicked - countWin >= 0 &&
      colClicked - countWin >= 0 &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked - countWin][colClicked - countWin]
    ) {
      let x = rowClicked - countWin;
      let y = colClicked - countWin;
      arrayPositionScored[countWin] = x + "" + y;
      countWin++;
      continue;
    } else {
      break;
    }
  }
  if (countWin == 5) {
    return arrayPositionScored;
  } else {
    return arraySkip;
  }
}

function checkCrosslineRightToLeft(rowClicked, colClicked) {
  let countWin = 1;
  let arrayPositionScored = [];
  let arraySkip = [];
  arrayPositionScored[0] = rowClicked + "" + colClicked;

  while (countWin <= 5) {
    if (
      rowClicked - countWin >= 0 &&
      colClicked + countWin < lengthColArray &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked - countWin][colClicked + countWin]
    ) {
      let x = rowClicked - countWin;
      let y = colClicked + countWin;
      arrayPositionScored[countWin] = x + "" + y;
      countWin++;
      continue;
    } else if (
      rowClicked + countWin < lengthRowArray &&
      colClicked - countWin >= 0 &&
      arrayCaro[rowClicked][colClicked] ==
        arrayCaro[rowClicked + countWin][colClicked - countWin]
    ) {
      let x = rowClicked + countWin;
      let y = colClicked - countWin;
      arrayPositionScored[countWin] = x + "" + y;
      countWin++;
      continue;
    } else {
      break;
    }
  }
  if (countWin == 5) {
    return arrayPositionScored;
  } else {
    return arraySkip;
  }
}

function resetGame() {
  countTurn = 0;
  setTimeout(function () {
    for (let i = 0; i < arrayCaro.length; i++) {
      for (let j = 0; j < arrayCaro[i].length; j++) {
        arrayCaro[i][j] = "*";
        document.getElementById(i + "" + j).style.backgroundColor = "white";
        document.getElementById(i + "" + j).innerHTML = "";
      }
    }
  }, 500);
}

function gameTie() {
  setTimeout(function () {
    alert("Game Tie !!");
  }, 200);
  resetGame();
}

function actionWhenWin(arrayPositionScored, presentTurn) {
  for (let i = 0; i < arrayPositionScored.length; i++) {
    document.getElementById(arrayPositionScored[i]).style.backgroundColor =
      "#2ecc71";
  }
  setTimeout(function () {
    alert(`Player ${presentTurn} win !!`);
  }, 200);
  resetGame();
}

function actionWhenClickCell(presentTurn, rowClicked, colClicked, cellClicked) {
  if (arrayCaro[rowClicked][colClicked] == "*") {
    countTurn++;
    cellClicked.innerText = presentTurn;
    arrayCaro[rowClicked][colClicked] = presentTurn;

    if (presentTurn == PLAYER_X) {
      cellClicked.style.color = "red";
      turn = PLAYER_O;
    } else {
      cellClicked.style.color = "blue";
      turn = PLAYER_X;
    }

    while (true) {
      if (checkRow(rowClicked, colClicked).length > 0) {
        let arrayPositionScored = checkRow(rowClicked, colClicked);
        actionWhenWin(arrayPositionScored, presentTurn);
        break;
      } else if (checkCol(rowClicked, colClicked).length > 0) {
        let arrayPositionScored = checkCol(rowClicked, colClicked);
        actionWhenWin(arrayPositionScored, presentTurn);
        break;
      } else if (checkCrosslineLeftToRight(rowClicked, colClicked).length > 0) {
        let arrayPositionScored = checkCrosslineLeftToRight(
          rowClicked,
          colClicked,
        );
        actionWhenWin(arrayPositionScored, presentTurn);
        break;
      } else if (checkCrosslineRightToLeft(rowClicked, colClicked).length > 0) {
        let arrayPositionScored = checkCrosslineRightToLeft(
          rowClicked,
          colClicked,
        );
        actionWhenWin(arrayPositionScored, presentTurn);
        break;
      } else {
        break;
      }
    }
  }
}

function clickCell(id_cell) {
  let arrPositionCellClicked = id_cell.split("");
  let rowClicked = Number(arrPositionCellClicked[0]);
  let colClicked = Number(arrPositionCellClicked[1]);
  let cellClicked = document.getElementById(id_cell);
  if (turn == PLAYER_X) {
    actionWhenClickCell(PLAYER_X, rowClicked, colClicked, cellClicked);
  } else {
    actionWhenClickCell(PLAYER_O, rowClicked, colClicked, cellClicked);
  }

  if (countTurn == lengthColArray * lengthRowArray) {
    gameTie();
  }
}
