function kiemTraTuoi(age) {
    let a = Number(age);

    if(isNaN(a) == false) {
        if(a >= 15) {
        console.log("Du dieu kien vao lop 10");
       } else {
        console.log("Khong du dieu kien vao lop 10");
       }
    } else {
        console.log("Please enter number!!");
    }

}

kiemTraTuoi(6);