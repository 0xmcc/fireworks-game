function displayLeaderboard(newScore = null) {
  const leaderboard = document.getElementById('leaderboard');
  const scoresList = document.getElementById('scores-list');
  const newScoreInput = document.getElementById('new-score-input');
  
  scoresList.innerHTML = '';
  highScores.sort((a, b) => b.score - a.score);

  highScores.forEach((entry, index) => {
    const div = document.createElement('div');
    div.className = 'leaderboard-entry';
    div.innerHTML = `
      <span>${index + 1}. ${entry.name}</span>
      <span>${entry.score}</span>
    `;
    scoresList.appendChild(div);
  });

  if (newScore !== null && checkHighScore(newScore)) {
    newScoreInput.style.display = 'block';
  } else {
    newScoreInput.style.display = 'none';
  }

  leaderboard.style.display = 'block';
}

// Update leaderboard styles to position it above game over text 