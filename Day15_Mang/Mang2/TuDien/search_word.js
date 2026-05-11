let input = document.getElementById("input_englishWord");
let output = document.getElementById("text_result");

let wordsDefined = [["Hello", "Xin chào"], ["Hi", "Xin chào"], ["Love", "Yêu"], ["Go", "Đi"],["Travel", "Du Lịch"], ["Ride", "Đạp xe"], ]

function searchWord() {
    let inputWord = input.value.trim().toLowerCase();
    let result = "";
    for (let i = 0; i < wordsDefined.length; i++) {
        let check = wordsDefined[i][0].toLowerCase();
        if(check == inputWord) {
            result = wordsDefined[i][1];
            break;
        }
    }
    output.innerText = result;
}