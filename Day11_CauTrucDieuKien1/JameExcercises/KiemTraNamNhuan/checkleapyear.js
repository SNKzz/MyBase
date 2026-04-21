let inputYear = document.getElementById("inputyear");
let result = document.getElementById("result");

inputYear.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};


function checkLeap(){
    let year = Number(inputYear.value);

    if (year % 4 == 0) {
        if (year % 100 != 0){
            result.innerText = year+ " is a leap year";
        } else {
            if (year % 400 == 0) {
                result.innerText = year+ " is a leap year";
            } else {
                result.innerText = year+ " is not a leap year";
            }
        }
    } else {
        result.innerText = year+ " is not a leap year";
    }
}