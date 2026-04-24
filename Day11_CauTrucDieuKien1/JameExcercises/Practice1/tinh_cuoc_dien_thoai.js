function tinhCuocDienThoai (a) {
    let soPhut = Number(a);
    let cuocThueBao = 25000;
    let cuocPhi = 0;
    if (isNaN (soPhut) == false && a > 0) {
        if (soPhut <= 50){
            cuocPhi = 600;
            let tongHoaDon = cuocPhi * soPhut + cuocThueBao;
            console.log("- So phut: " +soPhut+ " phut\n- Cuoc phi: " +cuocPhi+ " VND\n- Tong hoa don: " +tongHoaDon+ " VND");
        } else if (50 > soPhut && soPhut < 200) {
             cuocPhi = 400;
            let tongHoaDon = cuocPhi * soPhut + cuocThueBao;
            console.log("- So phut: " +soPhut+ " phut\n- Cuoc phi: " +cuocPhi+ " VND\n- Tong hoa don: " +tongHoaDon+ " VND");
        } else {
             cuocPhi = 200;
            let tongHoaDon = cuocPhi * soPhut + cuocThueBao;
            console.log("- So phut: " +soPhut+ " phut\n- Cuoc phi: " +cuocPhi+ " VND\n- Tong hoa don: " +tongHoaDon+ " VND");
        }
    } else {
        console.log("Please enter number > 0");
    }
}

tinhCuocDienThoai(300)