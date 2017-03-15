//Eddy Ahlqvist

function Ball(br) {
  this.ballMoving = false; //True if ball is moving, false if ball is attached to paddle.
  this.x;
  this.y;
  this.br = br;
  this.speedX = -4;
  this.speedY = -4;

  this.display = function() {
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.br*2, this.br*2);
  }

  this.checkIfHitBrick = function(brick) {
    var distX = Math.abs(this.x - brick.x-brickWidth/2);
    var distY = Math.abs(this.y - brick.y-brickHeight/2);

    if (distX > (brickWidth/2 + this.br)) { 
      return false;
    } else if (distY > (brickHeight/2 + this.br)) { 
      return false;
    } else if (distX <= (brickWidth/2 + this.br)) { 
      return true;
    } else if (distY <= (brickHeight/2 + this.br)) { 
      return true;
    } else {
      return false;
    }

    //var dx = distX - brickWidth/2;
    //var dy = distY - brickHeight/2;
    //return (dx*dx+dy*dy<=(this.br*this.br));
  }

  this.move = function() {
    if (this.ballMoving) {
      this.x += this.speedX;
      this.y += this.speedY;
    } else {
      this.x = mouseX + paddle.pw*0.8; //Ball starts on top of the paddle.
      this.y = paddle.y - this.br - 0.2;
      this.speedX = +4;
      this.speedY = -4;
    }
  }

  this.checkHit = function() {
    
    //Check if the ball hits middle part of paddle
    if (this.y + this.br >= paddle.y && this.x >= mouseX + 30 && this.x <= mouseX + paddle.pw - 30) { 
      this.speedY *= -1;
      sounds[3].play();
      
      //Check if the ball hits the left part of paddle
    } else if (this.y + this.br >= paddle.y && this.x > mouseX && this.x < mouseX + 35) { 
      this.speedY = -4;
      this.speedX = -4;
      sounds[3].play();
      
      //Check if the ball hits the right part of paddle
    } else if (this.y + this.br >= paddle.y && this.x > mouseX + paddle.pw - 35 && this.x < mouseX + paddle.pw) { 
      this.speedY = -4;
      this.speedX = +4;
      sounds[3].play();
      
      //Check if the ball hits the right wall
    } else if (this.x >= width - this.br) { 
      this.speedX *= -1;
      sounds[4].play();
      
      //Check if the ball hits the left wall
    } else if (this.x <= 0 + this.br) { 
      this.speedX *= -1;
      sounds[4].play();
      
      //Check if the ball hits the top wall
    } else if (this.y <= 0 + this.br) { 
      this.speedY *= -1;
      sounds[4].play();
      
      //Check if the ball goes out of play at the bottom
    } else if (this.y >= height - 60 - this.br + paddle.ph) { 
      this.ballMoving = false;
      info.lives -= 1; //Removes a life each time the ball goes out of play
      sounds[2].play();
      
      //Don't need this
    } else {
      this.speedY = this.speedY;
      this.speedX = this.speedX;
    }
  }
}