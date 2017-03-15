//Eddy Ahlqvist

function Info(lives) {
  this.lives = lives; 
  this.score = 0;

  this.win = function() {
    ball.ballMoving = false;
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
    ball.ballMoving = false;
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

  this.soundLevels = function() {
    sounds[3].rate(2);
    sounds[3].setVolume(0.2);
    sounds[2].setVolume(0.2);
    sounds[4].setVolume(0.1);
    sounds[0].setVolume(0.2);
    sounds[1].setVolume(0.2);
  }

  this.randomSound = function() {
    var rand = floor(random(2));
    sounds[rand].play();
  }
}