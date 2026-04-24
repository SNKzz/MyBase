

function action(id) {
let checkbox1 = document.getElementById("1");
let checkbox2 = document.getElementById("2");
let checkbox3 = document.getElementById("3");
    switch(id) {
        case 1:
            if (checkbox2.checked) {
                checkbox3.checked = false;
            } 
            break;
        case 2:
            if (checkbox3.checked) {
                checkbox1.checked = false;
            } 
            break;

        case 3:
            if (checkbox2.checked) {
                checkbox1.checked = false;
            }          
            break;
    }
}