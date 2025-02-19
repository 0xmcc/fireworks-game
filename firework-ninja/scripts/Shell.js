class Shell {
  constructor(x, y, settings) {
    this.x = x;
    this.y = y;
    this.vx = random(-settings.maxVx, settings.maxVx);
    this.vy = random(-settings.verticalSpeed, -settings.verticalSpeed * 0.75);
    this.gravity = settings.gravity;
    this.radius = random(15, 25);
    this.color = random(colors);
    this.exploded = false;
  }

  update() {
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    
    // Bounce off walls
    if (this.x < this.radius || this.x > width - this.radius) {
      this.vx *= -0.8;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    
    // Draw shell
    circle(this.x, this.y, this.radius * 2);
    
    // Draw fuse
    stroke(200, 150, 100);
    strokeWeight(3);
    let fuseLength = this.radius * 1.5;
    let angle = atan2(this.vy, this.vx) + PI/2;
    line(this.x, this.y, 
         this.x + cos(angle) * fuseLength,
         this.y + sin(angle) * fuseLength);
         
    // Draw spark at end of fuse
    if (frameCount % 4 < 2) {
      fill(255, 200, 50);
      noStroke();
      circle(
        this.x + cos(angle) * fuseLength,
        this.y + sin(angle) * fuseLength,
        4
      );
    }
  }
} 