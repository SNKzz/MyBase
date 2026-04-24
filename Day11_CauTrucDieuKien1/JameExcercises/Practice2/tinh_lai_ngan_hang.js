function checkTien (soTien) {
    if(isNaN(soTien) == false && soTien > 0) {
        return true;
    } else {
        return false;
    }
}

function checkThang (soThang) {
    if(isNaN(soThang) == false && parseInt (soThang) === soThang && soThang > 0) {
        return true;
    } else {
        return false;
    }
}

function tinhLaiNganHang(a, b) {
    let soTienGoc = Number(a);
    let soThang = Number(b);
    let laiSuat = 0;
    let tongSoTien = 0

    if(checkThang(soThang) == true && checkTien(soTienGoc) == true) {
        switch(true){
            case soThang == 1:
                laiSuat = 0.003;
                soTienLai = laiSuat * soTienGoc;
                tongSoTien = soTienLai + soTienGoc;
                break;
 
            case (soThang > 1 && soThang < 6):
                laiSuat = 0.005;
                soTienLai = laiSuat * soTienGoc;
                tongSoTien = soTienLai + soTienGoc;
                break;

            case (soThang >= 6 && soThang <= 12):
                laiSuat = 0.008;
                soTienLai = laiSuat * soTienGoc;
                tongSoTien = soTienLai + soTienGoc;
                break;
                               
            default: 
                laiSuat = 0.01;
                soTienLai = laiSuat * soTienGoc;
                tongSoTien = soTienLai + soTienGoc;
                break;   
        }
        console.log("- So tien goc: " +soTienGoc+ " trieu");
        console.log("- So thang gui: " +soThang+ " thang");
        console.log("- Lai suat: " +laiSuat+ " trieu");
        console.log("- Tong so tien nhan duoc: " +tongSoTien.toLocaleString()+ " trieu");
    } else {
        console.log("Input not correc!!");
    }
}

tinhLaiNganHang(12, 36);