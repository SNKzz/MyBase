function changeImage (id) {
    let image = document.getElementById(""+id);
    let imageIDShowed = parseInt(image.alt);
    
    if(imageIDShowed < 5) {
      imageIDShowed += 1;
    } else {
       imageIDShowed = 1;
    }
    image.src = "./image/anh" +imageIDShowed+ ".png";
    image.alt = imageIDShowed;
    checkLineUp();
}

function checkLineUp(){
    let table = document.getElementById("table");
    let alt1 = parseInt(document.getElementById("1").alt);
    let alt2 = parseInt(document.getElementById("2").alt);
    let alt3 = parseInt(document.getElementById("3").alt);
    let alt4 = parseInt(document.getElementById("4").alt);
    let alt5 = parseInt(document.getElementById("5").alt);

    if (alt1 == alt2 && alt3 == alt2 && alt3 == alt4 && alt4 == alt5 && alt5 == alt1){
        table.style.borderColor = "red";
        table.style.borderWidth = "5px";
        setTimeout(function() {
    alert("Congratulate !!!");
}, 500);
    } else {
        table.style.borderColor = "black";
        table.style.borderWidth = "1px";
    }
}