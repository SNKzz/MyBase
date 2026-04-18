function generateRandomNumber(){
    let min = Number(document.getElementById("number_min").value);
    let max = Number(document.getElementById("number_max").value);
    let randomNumber = document.getElementById("number_random");

    if (isNaN(min) == true || isNaN(max) == true) {
        randomNumber.innerHTML="Please enter the correct define of number !!";
    } else if (min > max) {
        randomNumber.innerText="Please enter min > max!!"
    } else if (min === max) {
        randomNumber.innerText = "Result: " +min;
    }else{
        if (min === 0) {
            let result =Math.floor((Math.random() * max));
            randomNumber.innerText = "Result: " +result;
        } else {
            let space = max - min + 1;
            let result = Math.floor((Math.random() * space) + min);    
            randomNumber.innerText = "Result: " +result;      
        }
    }
}