let canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.Height = window.innerHeight - 100;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
  });

let ctx = canvas.getContext('2d');

