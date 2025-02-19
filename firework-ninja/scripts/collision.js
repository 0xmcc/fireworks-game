function lineCircleCollision(x1, y1, x2, y2, cx, cy, r) {
  let inside1 = pointCircleCollision(x1, y1, cx, cy, r);
  let inside2 = pointCircleCollision(x2, y2, cx, cy, r);
  if (inside1 || inside2) return true;
  
  let distX = x1 - x2;
  let distY = y1 - y2;
  let len = sqrt(distX*distX + distY*distY);
  
  let dot = ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / (len * len);
  
  let closestX = x1 + dot * (x2 - x1);
  let closestY = y1 + dot * (y2 - y1);
  
  if (!linePointCollision(x1, y1, x2, y2, closestX, closestY)) return false;
  
  distX = closestX - cx;
  distY = closestY - cy;
  let distance = sqrt(distX*distX + distY*distY);
  
  return distance <= r;
}

function pointCircleCollision(px, py, cx, cy, r) {
  let distX = px - cx;
  let distY = py - cy;
  let distance = sqrt(distX*distX + distY*distY);
  
  return distance <= r;
}

function linePointCollision(x1, y1, x2, y2, px, py) {
  let d1 = dist(px, py, x1, y1);
  let d2 = dist(px, py, x2, y2);
  let lineLen = dist(x1, y1, x2, y2);
  
  let buffer = 0.1;
  
  return d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer;
} 