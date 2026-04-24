function tinhHoaHong(doanhSoBanHang) {
    let a = Number(doanhSoBanHang);

    if(isNaN(a) == false && a >0) {
       
            console.log("Doanh thu: " +a+ " trieu");
            if (a < 10) {
                console.log("=> Hoa hong 5%");
                console.log("=> So tien hoa hong: " + (a * 0.05).toFixed(2) + " trieu");
            } else if (10 <= a && a < 50) {
                console.log("=> Hoa hong 10%");
                console.log("=> So tien hoa hong: " + (a * 0.1).toFixed(2) + " trieu");
            } else {
                console.log("=> Hoa hong 15%");
                console.log("=> So tien hoa hong: " + (a * 0.15).toFixed(2) + " trieu");
            }

            
    } else {
        console.log("Please enter number!!");
    }

}

tinhHoaHong(51);