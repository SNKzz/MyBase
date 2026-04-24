// Phuong trinh bac 2: ax^2 + bx + c = 0;
import giaiPTbac1 from "./phuong_trinh_bac_1.js";

function giaiPTbac2 (a, b, c) {
    let num1 = Number(a);
    let num2 = Number(b);
    let num3 = Number(c);

    if (isNaN(num1) == false && isNaN(num2) == false && isNaN(num3) == false){
        if (num1 == 0) {
            giaiPTbac1 (num2, num3);
        } else {
            console.log("- Phuong trinh da nhap: " +num1+ "x^2 + " +num2+ "*x + " +num3+ " = 0");

            let delta = Math.pow(num2, 2) - 4*num1*num3;
            switch(true) {
                case delta < 0:
                    console.log("=> Phuong trinh vo nghiem!");
                    break;
                    
                case delta == 0: 
                    let result = -num2 / 2 * num1;
                    console.log("=> Phuong trinh co nghiem kep x1 = x2 = " +result);
                    break;

                default:
                    let x1 = (-num2 - Math.sqrt(delta)) / 2 * num1;
                    let x2 = (-num2 + Math.sqrt(delta)) / 2 * num1;  
                    console.log("=> Phuong trinh co 2 nghiem: ");
                    console.log("x1 = " +x1);
                    console.log("x2 = " +x2);
                    break;
            }
        }
    } else {
        console.log("Please input correct number!");
    }
}

giaiPTbac2(1,-4,4);