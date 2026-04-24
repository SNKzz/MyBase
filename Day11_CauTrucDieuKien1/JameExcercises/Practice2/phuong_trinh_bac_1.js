// Phuong trinh bac 1: ax + b = 0;
 export default function giaiPTbac1 (a, b) {
    let n1 = Number(a);
    let n2 = Number(b);

    if(isNaN(n1) == false && isNaN(n2) == false) {
        if (n1 != 0) {
            let result = n2 / n1;
            console.log("- Phuong trinh da nhap: " +n1+ "x + " +n2+ " = 0");
            console.log("- x = " +result.toFixed(2));
        } else {
            console.log("Phuong trinh vo nghiem!");
        }
    } else {
        console.log("Please input correct input!!");
    }
}

// giaiPTbac1(6,122);
