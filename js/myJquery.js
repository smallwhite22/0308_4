$('.box').mousemove(function (event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    console.log(upX, upY);
    $('.sunBox').css("height", upY);
    if (upY <= 476) {
        $('.bar').css("top", upY - 5);
    }


});