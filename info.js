function info() {
  this.lives = 3; 
  this.score = 0; 

  this.win = function() {
    ballMoving = false;
    cursor();
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("You beat the game! " + " You got " + this.score + " points", width/2, height/2);
    fill(50);
    rect(width/2 - 125, height/2 + 50, 250, 40, 25);
    fill(255);
    text("Restart Game", width/2, height/2 + 82);
    textAlign(LEFT);
    if (mouseIsPressed) {
      if (mouseButton == LEFT)
        this.restartGame();
    }
  }

  this.gameOver = function() {
    ballMoving = false;
    cursor();
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("Game Over! " + " You got " + this.score + " points", width/2, height/2);
    fill(50);
    rect(width/2 - 125, height/2 + 50, 250, 40, 25);
    fill(255);
    text("Restart Game", width/2, height/2 + 82);
    textAlign(LEFT);
    if (mouseIsPressed) {
      if (mouseButton == LEFT)
        this.restartGame();
    }
  }

  this.restartGame = function() {
    noCursor();
    brickSetup();
    this.lives = 3;
    this.score = 0;
  }

  this.scoreDisplay = function() {
    textSize(32);
    fill(255);
    text("Score: " + this.score, 25, height - 12);
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

function soundLevels() {
  paddleSound.rate(2);
  paddleSound.setVolume(0.2);
  outSound.setVolume(0.2);
  wallSound.setVolume(0.1);
  bounceSounds[0].setVolume(0.2);
  bounceSounds[1].setVolume(0.2);
}