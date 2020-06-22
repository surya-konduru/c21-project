var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1500, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(0, 0, 255);
  wall = createSprite(1250, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);
  drawSprites();

  if (bullet.x - wall.x < bullet.width / 2 + wall.width / 2 &&
    wall.x - bullet.x < bullet.width / 2 + wall.width / 2 || bullet.x > wall.x) {

    bullet.velocityX = 0;
    bullet.x = wall.x - thickness / 2;

    var damage = (0.5 * weight * speed * speed) / 22500;
    if (damage > 10) {
      // red
      bullet.shapeColor = color(255, 0, 0);
    } else {
      // green
      bullet.shapeColor = color(0, 255, 0);
    }

  }
}