$('.box').mousemove(function (event) {
    event.preventDefault();
     var upX = event.clientX;
     var upY = event.clientY;
     console.log(upX, upY);
     $('.sunBox').css("height",upY);
     $('.bar').css("top",upY-5);

 });