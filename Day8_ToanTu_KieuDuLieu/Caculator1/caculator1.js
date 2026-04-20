function add() {
  let inputNum1 = document.getElementById("number1").value;
  let inputNum2 = document.getElementById("number2").value;

  let number1 = Number(inputNum1);
  let number2 = Number(inputNum2);
  let result = document.getElementById("result");
  if (
    (inputNum1 !== "0" && number1 === 0) ||
    (inputNum2 !== "0" && number2 === 0)
  ) {
    result.innerText = "Please enter correct defination of number !!";
  } else {
    let goal = number1 + number2;
    result.innerText = "" + goal;
  }
}

function sub() {
  let inputNum1 = document.getElementById("number1").value;
  let inputNum2 = document.getElementById("number2").value;

  let number1 = Number(inputNum1);
  let number2 = Number(inputNum2);
  let result = document.getElementById("result");
  if (
    (inputNum1 !== "0" && number1 === 0) ||
    (inputNum2 !== "0" && number2 === 0)
  ) {
    result.innerText = "Please enter correct defination of number !!";
  } else {
    let goal = number1 - number2;
    result.innerText = "" + goal;
  }
}

function mul() {
  let inputNum1 = document.getElementById("number1").value;
  let inputNum2 = document.getElementById("number2").value;

  let number1 = Number(inputNum1);
  let number2 = Number(inputNum2);
  let result = document.getElementById("result");
  if (
    (inputNum1 !== "0" && number1 === 0) ||
    (inputNum2 !== "0" && number2 === 0)
  ) {
    result.innerText = "Please enter correct defination of number !!";
  } else {
    let goal = number1 * number2;
    result.innerText = "" + goal;
  }
}

function div() {
  let inputNum1 = document.getElementById("number1").value;
  let inputNum2 = document.getElementById("number2").value;

  let number1 = Number(inputNum1);
  let number2 = Number(inputNum2);
  let result = document.getElementById("result");
  if (
    (inputNum1 !== "0" && number1 === 0) ||
    (inputNum2 !== "0" && number2 === 0)
  ) {
    result.innerText = "Please enter correct defination of number !!";
  } else {
    let goal = number1 / number2;
    result.innerText = "" + goal;
  }
}
