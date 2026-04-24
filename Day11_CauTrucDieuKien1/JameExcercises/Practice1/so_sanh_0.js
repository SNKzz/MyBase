function soSanh0(number) {
    let a = Number(number);

    if(isNaN(a) == false) {
        if(a > 0) {
        console.log("Day la so lon hon 0");
       } else if (a < 0) {
        console.log("Day la so be hon 0");
       }else {
        console.log("Bang 0");
       }
    } else {
        console.log("Please enter number!!");
    }

}

soSanh0(13123-31232);