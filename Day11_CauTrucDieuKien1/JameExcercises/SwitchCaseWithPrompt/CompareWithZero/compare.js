let inputNumber = +prompt("Input your number here");

switch(true) {
    case inputNumber > 0:
        alert("1");
        break;
    case inputNumber < 0:
        alert("-1");
        break;
    default:
        alert("0");
        break;
}
