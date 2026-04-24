function checkLength (a) {
    if (isNaN(a) == false &&  a > 0) {
        return true;
    } else {
        return false;
    }
}
function dienTichTamGiacVuong(a, b) {
    let lengthA = Number(a);
    let lengthB = Number(b);


    if(checkLength(lengthA) == true && checkLength(lengthB) == true) {
        let dienTich = (lengthA * lengthB) / 2;
        console.log("- Do dai canh 1: " +lengthA+ "\n- Do dai canh 2: " +lengthB+ "\n- Dien tich: " +dienTich.toFixed(2)); 
    } else {
        console.log("Please enter number > 0!!");
    }
}

dienTichTamGiacVuong(20, 10);