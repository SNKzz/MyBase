
let result = document.getElementById("result");

function checkAnswer() {
    let answer = String(document.getElementById("inputanswer").value);
    console.log(answer);
    if (answer.trim("") === "ECMAScript") {
        result.innerText = "Right!";
    } else {
        result.innerText = "Didn’t know? ECMAScript!";
    }
}