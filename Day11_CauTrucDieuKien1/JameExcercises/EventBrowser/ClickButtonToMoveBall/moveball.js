function moveBall() {
    let ball = document.getElementById("ball");
    // bất kể nó được viết ở file CSS nào.
    let computedStyle = window.getComputedStyle(ball);
    let currentLeft = parseInt(computedStyle.left); 
    
    // Sau khi lấy được số rồi thì vẫn dùng .style.left để GHI ĐÈ vào
    ball.style.left = (currentLeft + 10) + "px";
}