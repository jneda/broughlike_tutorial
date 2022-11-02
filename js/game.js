const game = {
  tileSize: 64,
  numTiles: 9,
  uiWidth: 4,

  setupCanvas() {
    this.canvas = document.querySelector("canvas");

    // dynamically size the canvas
    this.canvas.width = this.tileSize * (this.numTiles + this.uiWidth);
    this.canvas.height = this.tileSize * this.numTiles;
    this.canvas.style.width = `${this.canvas.width}px`;
    this.canvas.style.height = `${this.canvas.height}px`;


    this.ctx = this.canvas.getContext("2d");
  }
}