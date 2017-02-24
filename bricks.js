function Bricks(x, y) 
{
  this.x = x;
  this.y = y;
  this.brickWidth = brickWidth;
  this.brickHeight = brickHeight;
}

//Testing to adding the display function into 'Prototype'
//This will make the function be stored only once, and not in all of the bricks.

Bricks.prototype.display = function() {
  fill(0, 255, 200, 150);
  rect(this.x, this.y, this.brickWidth, this.brickHeight);
}