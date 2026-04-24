let inputWeight = document.getElementById("weight");
let inputHeight = document.getElementById("height");
let result = document.getElementById("result");

inputHeight.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};
inputWeight.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};


function checkBMI() {
    let height = Number(inputHeight.value);
    let weight = Number(inputWeight.value);

    let bmi = weight / (Math.pow(height,2));

    switch(true) {
        case bmi < 18.5:
            result.innerText = "Underweight";
            break;
        case (bmi < 25):
            result.innerText = "Normal";
            break;
        case (bmi < 30):
            result.innerText = "Overweight";
            break;
        case bmi >= 30:
            result.innerText = "Obese";
            break;
    }
}