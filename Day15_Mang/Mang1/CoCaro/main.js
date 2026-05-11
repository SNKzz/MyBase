    let matrixCaro = [["O","O","O","O","O"],["O","O","O","O","O"],["O","O","O","O","O"],
    ["O","O","O","O","O"],["O","O","O","O","O"]];

function changeText(position) {
    let selectedItem = document.getElementById(position);
    console.log("abc");

    let row = Number(position.charAt(0))-1;
    let col = Number(position.charAt(1))-1;
    console.log(row + "___" +col);

    let item = [row][col];
    let check = matrixCaro.indexOf(item);
    let newValue = "";

    for (let i = 0; i < matrixCaro.length; i++) {
        for (let j = 0; j < matrixCaro[i].length; j++) {
            if (i == row && j == col) {
                if(matrixCaro[i][j] == "O") {
                    matrixCaro[i][j] = "X";
                    console.log(matrixCaro[i][j]);
                    selectedItem.innerText = "X";
                    break;
                } else {
                    matrixCaro[i][j] = "O";
                    console.log(matrixCaro[i][j]);
                    selectedItem.innerText = "O";
                    break;
                }
            }
        }
    }
}