function tinhGiaDien (a, b) {
    let khoangSoDien = Number(a);
    let giaBanLe = Number(b);

    if (isNaN(khoangSoDien) == false && khoangSoDien > 0) {
        let giaBanLe = 0;
        let tongHoaDon = 0;

        switch (true) {
            case khoangSoDien < 50:
                 giaBanLe = 1806;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break;

            case (khoangSoDien >= 50 && khoangSoDien < 100):
                 giaBanLe = 1866;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break; 

            case (khoangSoDien >= 100 && khoangSoDien < 200):
                 giaBanLe = 2167;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break;                    
            case (khoangSoDien >= 200 && khoangSoDien < 300):
                 giaBanLe = 2729;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break;      
            case (khoangSoDien >= 300 && khoangSoDien < 400):
                 giaBanLe = 3050;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break;     
            default:
                 giaBanLe = 3151;
                 tongHoaDon = giaBanLe * khoangSoDien;
                 break;                             
         }

         console.log("- Khoang so dien: " +khoangSoDien+ "kWh\n- Gia ban le: " +giaBanLe+ "đ/kWh\n- Tong hoa don: " +tongHoaDon.toLocaleString()+ "VND");
    } else {
        console.log("Please enter number > 0");
    }
}

tinhGiaDien(98.5);