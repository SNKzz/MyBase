function xepLoaiHocSinh (diemKiemTra, diemGiuaKi, diemCuoiKi) {
    let a = Number(diemKiemTra);
    let b = Number(diemGiuaKi);
    let c = Number(diemCuoiKi);

    if (isNaN(a) == false && isNaN(b) == false && isNaN(c) == false) {
    if(a <= 10 && b <= 10 && c <= 10){
        let finalScore = (a + b +c)/3;
       if (finalScore < 5) {
        console.log("Hoc luc trung binh");
       } else if (5 <= finalScore && finalScore < 8) {
        console.log("Hoc luc kha");
       } else {
        console.log("Hoc luc gioi");
       }
    } else {
        console.log("Please enter score <= 10!!!");
    }
    } else {
        console.log("Please enter nunber !!");
    }

}

xepLoaiHocSinh(7,10,9);