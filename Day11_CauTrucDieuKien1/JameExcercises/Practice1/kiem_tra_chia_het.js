function kiemTraChiaHet(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);

    if(isNaN(num1) == false && isNaN(num2) == false) {
        if(num1 % num2 === 0) {
        console.log(num1 + " chia het cho " +num2);
       } else {
        console.log(num1 + " khong chia het cho " +num2);
       }
    } else {
        console.log("Please enter number!!");
    }

}

kiemTraChiaHet(1, 2);