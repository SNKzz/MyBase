let inputUserName = document.getElementById("username");
let inputPassword = document.getElementById("password");

function check() {
    let username = String(inputUserName.value);
    let password = String(inputPassword.value);

    if (username === "admin") {
        switch(password) {
            case "TheMaster":
                alert("Welcome!");
                break;
            case "":
                alert("Canceled!");
                break;
            default:
                alert("Wrong password!!!");
                break;
        }
    } else {
        alert("I don't know you");
    }
}