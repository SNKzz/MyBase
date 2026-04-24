function findMax (num1, num2, num3) {
    let a = Number(num1);
    let b = Number(num2);
    let c = Number(num3);

    if (isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
        let max = a;
        if (max > b) {
            if (max > c) {
                console.log("Max = " +a);
            } else {
                console.log("Max = " +c);
            }
        } else {
            if (b > c) {
                console.log("Max = " +b);
            } else {
                console.log("Max = " +c);
            }
        }
    } else {
        console.log("Please enter nunber !!");
    }
}

findMax(7,2,3);