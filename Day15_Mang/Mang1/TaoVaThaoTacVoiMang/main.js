let input = document.getElementById("input_item");
let resultArea = document.getElementById("text_result");
let array = [];

function addItemtoArray() {
    let itemAdded = input.value;
    array.push(itemAdded);
}

function displayItemInArray() {
    let resultText = "";
    for (let i = 0; i < array.length; i++) {
        resultText += array[i]+"<br>";
    }
    resultArea.innerHTML = resultText;
}