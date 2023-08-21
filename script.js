const canvas = document.getElementById("background1");
const ctx = canvas.getContext("2d");

canvas.width = canvas.height = 50;

let x = 0,
  y = 0;

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, y, 50, 50);
  x++;
  y++;
  if (x >= canvas.width && y >= canvas.height) {
    x = y = - canvas.width;
  }
}

setInterval(
  (e = () => {
    if (x < canvas.width) {
      loop();
    }
    requestAnimationFrame(loop());
  }),
  100
);
