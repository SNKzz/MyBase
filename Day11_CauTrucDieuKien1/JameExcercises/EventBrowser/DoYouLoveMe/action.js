let div = document.getElementById("div_container");

let button_no = document.getElementById("button_answer_no");


function clickButton(answer) {
    if (answer === "Yes") {
        alert("Of course same do I <3");
    }
}

function randomPosition (positionMin, positionMax) {
    let newPosition = Math.floor((Math.random() * (positionMax - positionMin +1) + positionMin));
    console.log("min: " +positionMin+ " - max: "+positionMax );
    console.log("new: " +newPosition);
    return newPosition;
}

function hideNoAnswer() {
    let positionTop_div = div.offsetTop;
    let positionLeft_div = div.offsetLeft;
    let heightDiv = div.offsetHeight;
    let widthDiv = div.offsetWidth;

    let positionTop_btnNo = button_no.offsetTop;
    let positionLeft_btnNo = button_no.offsetLeft;

    let positionMaxHeight = heightDiv - 32;
    let positionMaxWidth = widthDiv - 72;

    let newPositionLeft = randomPosition(positionLeft_div, positionMaxWidth);
    let newPositionTop = randomPosition(positionTop_div, positionMaxHeight);
    
    button_no.style.top = newPositionTop +"px";
    button_no.style.left = newPositionLeft +"px";

}