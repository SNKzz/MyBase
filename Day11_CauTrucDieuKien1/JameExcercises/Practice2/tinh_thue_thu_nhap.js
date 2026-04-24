function tinhThueThuNhap (a) {
    let thuNhap = Number(a);
    let thueSuat = 0;
    let tongThue = 0;
    let tongNhan = 0;

    if(isNaN(thuNhap) == false && thuNhap > 0) {
        switch(true) {
            case thuNhap < 5:
                thueSuat = 0.05;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;

            case (thuNhap >= 5 && thuNhap < 10):
                thueSuat = 0.1;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;

            case (thuNhap >= 10 && thuNhap < 18):
                thueSuat = 0.15;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;

            case (thuNhap >= 18 && thuNhap < 32):
                thueSuat = 0.20;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;
                            
            case (thuNhap >= 32 && thuNhap < 52):
                thueSuat = 0.25;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;

            case (thuNhap >= 52 && thuNhap < 80):
                thueSuat = 0.3;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;
            
            default:
                thueSuat = 0.35;
                tongThue = thuNhap * thueSuat;
                tongNhan = thuNhap - tongThue;
                break;                
        }

        console.log("- Thu nhap: " +thuNhap+ " trieu\n- Thue suat: " +thueSuat+ "\n- Tong nhan: " +tongNhan+ " trieu");
    } else {
        console.log("Please enter number >0");
    }
}

tinhThueThuNhap(17);