let a = +prompt("Input a: ");
let b = +prompt("Input b: ");

if (isNaN(a) == true || isNaN(b) == true){
    document.write("Idiot input !!!");
} else {
    if (( a + b ) < 4) {
        document.write("Below");
    } else {
        document.write("Over")
    }
}