function calculate (operator) {
  let caculation = "";
  let inputNum1 = document.getElementById("number1");
  let inputNum2 = document.getElementById("number2");
  let result = document.getElementById("result");
  let number1 = Number(inputNum1.value);
  let numebr2 = Number(inputNum2.value);
  
  if (// catch exception input first character is 'e' or 'E'; 
    (inputNum1 !== "0" && number1 === 0) ||
    (inputNum2 !== "0" && number2 === 0)
  ) {
    result.innerText = "Please enter correct defination of number !!";
  } else {
    caculation =number1 + operator + numebr2;
    result.innerText = eval(caculation);
  }
 }
 
