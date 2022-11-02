let x = 0,
  y = 0;

const spritesheet = new Image();
spritesheet.src = "../img/spritesheet.png";

document.querySelector("html").addEventListener("keydown", function (ev) {
  // console.log(`key pressed event @ ${ev.key}; x=${x}, y=${y}`);
  if (ev.key === "z") y--;
  if (ev.key === "s") y++;
  if (ev.key === "q") x--;
  if (ev.key === "d") x++;
});

game.setupCanvas();

function drawSprite(sprite, x, y) {
  game.ctx.drawImage(
    spritesheet,
    sprite * game.tileSize, 0, 16, 16,
    x * game.tileSize, y * game.tileSize, game.tileSize, game.tileSize
  );
}

function draw() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  drawSprite(0, x, y);
}

setInterval(draw, 15);
