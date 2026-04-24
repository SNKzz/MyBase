function kiemTraTuoi(a) {
    let tuoi = Number(a);
    if(isNaN(tuoi) == false && tuoi >0 && tuoi <= 120) {
        console.log(tuoi + " la tuoi cua nguoi");
    } else {
        console.log("0 <= age <= 120");
    }
}

kiemTraTuoi(121);