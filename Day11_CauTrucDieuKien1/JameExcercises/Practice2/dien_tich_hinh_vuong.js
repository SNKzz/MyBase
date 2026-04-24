function dienTichHinhVuong(m) {
    let length = Number(m);

    if(isNaN(length) == false && length > 0) {
        let dienTich = length * 4;
        console.log("- Do dai canh hinh vuong: " +length+ "\n- Dien tich: " +dienTich.toFixed(2)); 
    } else {
        console.log("Please enter number > 0!!");
    }
}

dienTichHinhVuong(20);