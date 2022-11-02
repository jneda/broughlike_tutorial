let x = 0,
  y = 0;

document.querySelector("html").addEventListener("keydown", function (ev) {
  // console.log(`key pressed event @ ${ev.key}; x=${x}, y=${y}`);
  if (ev.key === "z") y--;
  if (ev.key === "s") y++;
  if (ev.key === "q") x--;
  if (ev.key === "d") x++;
});

game.setupCanvas();

function draw() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  game.ctx.fillRect(
    x * game.tileSize,
    y * game.tileSize,
    game.tileSize,
    game.tileSize
  );
}

setInterval(draw, 15);
