function setupControls() {
  document.getElementById('horizontalSpeed').addEventListener('input', function(e) {
    shellSettings.maxVx = parseFloat(e.target.value);
    document.getElementById('horizontalSpeedValue').textContent = e.target.value;
  });

  document.getElementById('verticalSpeed').addEventListener('input', function(e) {
    shellSettings.verticalSpeed = parseFloat(e.target.value);
    document.getElementById('verticalSpeedValue').textContent = e.target.value;
  });

  document.getElementById('gravity').addEventListener('input', function(e) {
    shellSettings.gravity = parseFloat(e.target.value);
    document.getElementById('gravityValue').textContent = e.target.value;
  });
} 