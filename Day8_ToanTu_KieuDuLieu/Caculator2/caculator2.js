let caculation = "";
let inputElement = document.getElementById("input");

function showMath (caculation) {
  inputElement.innerText = caculation;
}

function createMath (operator) {
  caculation += operator;
  showMath(caculation);
}


function inputdata_clear1() {
  caculation = caculation.substring(0, caculation.length - 1);
  showMath(caculation);
}

function inputdata_clearall() {
  caculation = "";
  showMath(caculation);;
}

function caculate() {
//use function eval instead of extensive library
try{
let result = eval(caculation);
  showMath(caculation +  "\n\n= " + result);
  } catch {
    showMath(caculation + "\n\nERROR!");
  }
}
