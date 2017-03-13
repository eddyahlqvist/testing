//Eddy Ahlqvist

function Paddle(pw, ph, y) {
  this.y = y;   //Paddle Y value   
  this.pw = pw; //Paddle Width
  this.ph = ph; //Paddle Height

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