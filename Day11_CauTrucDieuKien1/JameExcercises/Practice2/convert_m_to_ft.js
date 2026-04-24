function covertMtoFt(m) {
    let met = Number(m);

    if(isNaN(met) == false) {
        let feet = met * 3.2808;
        console.log("- Met: " +met+ "m\n- Feet: " +feet.toFixed(2)+ "ft"); 
    } else {
        console.log("Please enter number!!");
    }
}

covertMtoFt(20);