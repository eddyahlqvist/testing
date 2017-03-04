var pw = 100; //Paddle Width
var ph = 14; //Paddle Height

function Paddle() 
{
  this.y = height - 60; //Paddle Y value
  this.ph = ph; //Paddle Height 
  this.pw = pw; //Paddle Width

  this.display = function() {
    fill(255, 0, 200, 150);
    rect(mouseX, this.y, this.pw, this.ph, 6);
    line(mouseX + 30, height - 60, mouseX + 15, height - 46);
    line(mouseX + this.pw - 30, height - 60, mouseX + this.pw - 15, height - 46);
  }

  this.bounds = function() {
    if (mouseX + this.pw >= width) {
      mouseX = width - this.pw;
    }
    if (mouseX <= 0) {
      mouseX = 0;
    }
  }
}