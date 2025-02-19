class Explosion {
  constructor(x, y, shellColor) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.createParticles(shellColor);
  }

  createParticles(shellColor) {
    for (let i = 0; i < 80; i++) {
      let angle = random(TWO_PI);
      let speed = random(2, 8);
      let size = random(2, 5);
      
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: cos(angle) * speed,
        vy: sin(angle) * speed,
        size: size,
        color: shellColor,
        lifespan: 255,
        
        update: function() {
          this.x += this.vx;
          this.vy += 0.1; // Gravity
          this.y += this.vy;
          this.lifespan -= 5;
        },
        
        display: function() {
          if (this.lifespan > 0) {
            noStroke();
            fill(this.color[0], this.color[1], this.color[2], this.lifespan);
            circle(this.x, this.y, this.size);
          }
        }
      });
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }

  display() {
    for (let particle of this.particles) {
      particle.display();
    }
  }
} 