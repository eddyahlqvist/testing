function info() {
  this.lives = 3; 
  this.score = 0; 

  this.win = function() {
    ballMoving = false;
    brickSetup();
    alert("You beat the game! " + " You got " + this.score + " points");
    this.lives = 3;
    this.score = 0;
  }

  this.gameOver = function() {
    alert("Game Over! " + " You got " + this.score + " points");
    brickSetup();
    this.lives = 3;
    this.score = 0;
  }

  this.livesDisplay = function() {

    if (this.lives == 3) {
      fill(255);
      ellipse(width/2 - 25, height - 23, 20, 20);
      ellipse(width/2, height - 23, 20, 20);
      ellipse(width/2 + 25, height - 23, 20, 20);
    }
    if (this.lives == 2) {
      fill(255);
      ellipse(width/2 - 25, height - 23, 20, 20);
      ellipse(width/2, height - 23, 20, 20);
      noFill();
      ellipse(width/2 + 25, height - 23, 20, 20);
    }
    if (this.lives == 1) {
      fill(255);
      ellipse(width/2 - 25, height - 23, 20, 20);
      noFill();
      ellipse(width/2, height - 23, 20, 20);
      ellipse(width/2 + 25, height - 23, 20, 20);
    } 
    if (this.lives < 1) {
      noFill();
      ellipse(width/2 - 25, height - 23, 20, 20);
      ellipse(width/2, height - 23, 20, 20);
      ellipse(width/2 + 25, height - 23, 20, 20);

      this.gameOver();
    }
  }
}