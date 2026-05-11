let count = 0;
let arrayCaro = [
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"],
];

function checkTurn(count) {
  if (count % 2 == 0) {
    return "O";
  } else {
    return "X";
  }
}

function checkWinner(value) {
  if (value == "X") {
    setTimeout(function () {
      alert("Gamer X won !!");
    }, 200);
  } else {
    setTimeout(function () {
      alert("Gamer O won !!");
    }, 200);
  }
}

function checkRow(row) {
  if (
    arrayCaro[row][0] == arrayCaro[row][1] &&
    arrayCaro[row][1] == arrayCaro[row][2]
  ) {
    return true;
  }
}

function checkCol(col) {
  if (
    arrayCaro[0][col] == arrayCaro[1][col] &&
    arrayCaro[1][col] == arrayCaro[2][col]
  ) {
    return true;
  }
}

function checkCrossLine1() {
  if (
    arrayCaro[0][2] == arrayCaro[1][1] &&
    arrayCaro[1][1] == arrayCaro[2][0] &&
    arrayCaro[0][2] != "*"
  ) {
    return true;
  }
}

function checkCrossLine2() {
  if (
    arrayCaro[0][0] == arrayCaro[1][1] &&
    arrayCaro[1][1] == arrayCaro[2][2] &&
    arrayCaro[0][0] != "*"
  ) {
    return true;
  }
}

function resetGame() {
  setTimeout(function () {
    let newArrayCaro = [
      ["*", "*", "*"],
      ["*", "*", "*"],
      ["*", "*", "*"],
    ];
    arrayCaro = newArrayCaro;
    count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let id = `${i + 1}${j + 1}`;
        let position = document.getElementById(id);
        position.innerText = "*";
        position.setAttribute("value", "0");
        position.style.backgroundColor = "white";
      }
    }
  }, 500);
}

function resolveResult(whereToPaint, row, col) {
  if (whereToPaint == "row") {
    let markedPosition1 = (document.getElementById(
      row + 1 + "" + 1,
    ).style.backgroundColor = "green");
    let markedPosition2 = (document.getElementById(
      row + 1 + "" + 2,
    ).style.backgroundColor = "green");
    let markedPosition3 = (document.getElementById(
      row + 1 + "" + 3,
    ).style.backgroundColor = "green");
  } else if (whereToPaint == "col") {
    let markedPosition1 = (document.getElementById(
      1 + "" + (col + 1),
    ).style.backgroundColor = "green");
    let markedPosition2 = (document.getElementById(
      2 + "" + (col + 1),
    ).style.backgroundColor = "green");
    let markedPosition3 = (document.getElementById(
      3 + "" + (col + 1),
    ).style.backgroundColor = "green");
  } else if (whereToPaint == "cross2") {
    let markedPosition1 = (document.getElementById("11").style.backgroundColor =
      "green");
    let markedPosition2 = (document.getElementById("22").style.backgroundColor =
      "green");
    let markedPosition3 = (document.getElementById("33").style.backgroundColor =
      "green");
  } else {
    let markedPosition1 = (document.getElementById("13").style.backgroundColor =
      "green");
    let markedPosition2 = (document.getElementById("22").style.backgroundColor =
      "green");
    let markedPosition3 = (document.getElementById("31").style.backgroundColor =
      "green");
  }
  checkWinner(arrayCaro[row][col]);
  resetGame();
}

function checkStatusMatch(row, col) {
  //Check table is full or not
  if (count < 9) {
    //Check row
    if (checkRow(row) == true) {
      resolveResult("row", row, col);
    }
    //Check col
    if (checkCol(col) == true) {
      resolveResult("col", row, col);
      return;
    }
    //Check crossline
    if (checkCrossLine1() == true) {
      resolveResult("cross1", row, col);
      return;
    }

    if (checkCrossLine2() == true) {
      resolveResult("cross2", row, col);
      return;
    }
  }
}

function gameTie() {
  setTimeout(function () {
    alert("Game Tie !!");
  }, 200);
  resetGame();
}

function mark(id) {
  let position = document.getElementById(id);
  let row = Number(id[0]) - 1;
  let col = Number(id[1]) - 1;

  let typeMark = checkTurn(count);

  if (position.getAttribute("value") == "0") {
    position.setAttribute("value", typeMark);
    position.innerText = typeMark;
    arrayCaro[row][col] = typeMark;
    checkStatusMatch(row, col);
    count++;
    if (count == 9) {
      gameTie();
    }
  }
}
