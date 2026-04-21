let moneyOutput = document.getElementById("result");
let moneyInput = document.getElementById("money");
moneyInput.onkeydown = function(e) {
    // Chặn các ký tự: e, E, +, -
    if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
    }
};

function getValue(idOption) {
   return Number(document.getElementById(idOption).value);
}

function convertMoney(){
    let fromValue = getValue('fromCurrent');
    let toValue = getValue('toCurrent');


    let money = Number(document.getElementById("money").value);
   
        let fromCurrency = document.getElementById("fromCurrent").value;
        let toCurrency = document.getElementById("toCurrent").value;

        let result = Number(moneyInput.value) * toValue / fromValue;
        moneyOutput.innerText = result.toFixed(2);
   
}

