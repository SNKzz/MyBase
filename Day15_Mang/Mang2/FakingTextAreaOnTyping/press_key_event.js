let textArea = document.getElementById("textarea");
let prankString = "Iam an idiot = )))";
let arrayString = prankString.split("");

//Only working without Unikey = ))))
function pressKeyEvent(event) {
  let char = arrayString.shift();
  if (arrayString.length > 0) {
    event.preventDefault();
    textArea.value += char;
    console.log(textArea.value);
  } else {
    event.preventDefault();
  }
}
