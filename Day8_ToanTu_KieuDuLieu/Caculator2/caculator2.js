let caculation = "";

function inputdata_num_0() {
  caculation += "0";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_1() {
  caculation += "1";
  document.getElementById("input").innerText = "" + caculation;
}
function inputdata_num_2() {
  caculation += "2";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_3() {
  caculation += "3";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_4() {
  caculation += "4";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_5() {
  caculation += "5";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_6() {
  caculation += "6";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_7() {
  caculation += "7";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_8() {
  caculation += "8";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_9() {
  caculation += "9";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_num_0() {
  caculation += "0";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_openleft() {
  caculation += "(";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_openright() {
  caculation += ")";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_add() {
  caculation += " + ";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_sub() {
  caculation += " - ";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_mul() {
  caculation += " * ";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_div() {
  caculation += " / ";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_mod() {
  caculation += " % ";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_dat() {
  caculation += ".";
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_clear1() {
  let length = caculation.length;
  caculation = caculation.substring(0, length - 1);
  document.getElementById("input").innerText = "" + caculation;
}

function inputdata_clearall() {
  caculation = "";
  document.getElementById("input").innerText = "";
}

function caculate() {
  try {
    let result = math.evaluate(caculation);
    document.getElementById("input").innerText = caculation + "\n\n= " + result;
  } catch (error) {
    document.getElementById("input").innerText = caculation + "\n\nERROR!";
  }
}
