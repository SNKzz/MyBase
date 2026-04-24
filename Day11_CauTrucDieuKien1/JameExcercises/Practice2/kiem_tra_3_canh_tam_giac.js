function kiemTraTamGiac (a, b, c){
    lengthA = Number(a);
    lengthB = Number(b);
    lengthC = Number(c);
    
    if(isNaN(lengthA) == false || isNaN(lengthA) == false || isNaN(lengthA) == false) {
        if(lengthA > 0 && lengthB > 0 && lengthC > 0) {
            if(lengthA + lengthB > lengthC && lengthA + lengthC > lengthB && lengthC + lengthB > lengthA) {
                console.log("Day la 3 canh cua tam giac");
            } else {
                console.log("Day khong phai 3 canh cua tam giac");
            }
        } else {
            console.log("Nhap vao so > 0!");
        }
    } else {
        console.log("Nhap vao so > 0!");
    }
}

kiemTraTamGiac(-1,2,1);