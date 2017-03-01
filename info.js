
var info = {
  lives: 3, 
  score: 0
  }

function gameOver() {
  alert("Game Over");
  brickSetup();
  info.lives = 3;
  info.score = 0;
}