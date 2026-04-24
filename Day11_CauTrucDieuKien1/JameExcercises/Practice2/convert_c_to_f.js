function convertCtoF(c) {
    let degreeC = Number(c);

    if(isNaN(degreeC) == false) {
        let degreeF = degreeC * 9 / 5 + 32;
        console.log("- Nhiet do C: " +degreeC+ "\n- Nhiet do F: " +degreeF.toFixed(2)); 
    } else {
        console.log("Please enter number!!");
    }
}

convertCtoF("a");