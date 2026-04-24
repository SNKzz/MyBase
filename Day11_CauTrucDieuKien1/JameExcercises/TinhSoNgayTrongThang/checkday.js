let inputMonth = document.getElementById("month");
let result = document.getElementById("result");

inputMonth.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};

function checkDay() {
    let month = Number(inputMonth.value);
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result.innerText = "Tháng" +month+ " có 31 ngày";
            break;

        case 2:
            result.innerText = "Tháng 2 có 29 ngày";
            break;
            
        case 4:
        case 6:
        case 9:
        case 11:            
            result.innerText = "Tháng" +mont+ " có 30 ngày";
            break;
       
        default:
            result.innerText = "Tháng chỉ có từ 1-> 12 thôi thằng ngu!";
            break;

    }
}