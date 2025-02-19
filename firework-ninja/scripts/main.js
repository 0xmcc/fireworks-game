function draw() {
  // ... existing code ...

  // Draw game state
  if (gameOver) {
    displayLeaderboard(); // Show leaderboard first
    
    textSize(48);
    fill(255);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width/2, height/2 + 100); // Move down below leaderboard
    textSize(24);
    text("Click anywhere to play again", width/2, height/2 + 150);
  }
  // ... rest of existing code ...
}

function mousePressed() {
  if (gameOver) {
    // Reset game immediately on click
    shells = [];
    explosions = [];
    slices = [];
    score = 0;
    updateScore(0);
    missedShells = 0;
    gameOver = false;
    
    // If score is high enough, show input after reset
    if (checkHighScore(score)) {
      displayLeaderboard(score);
    }
  }
} 