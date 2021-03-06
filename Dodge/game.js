var player; 
var enemy; 
var isGameOver; 

 function preload(){
  playerImage = loadImage();
  enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
}
 
 
 
function gameOver() { 
  background(0); 
  textAlign(CENTER); 
  fill("white"); 
  text("Game Over!", width/2, height/2); 
  text("Click anywhere to try again", width/2, 3*height/4);
} 
function mouseClicked() {
  if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
  }
}
 
function setup() { 
    isGameOver = false; 
    createCanvas(250, 250); 
   player = createSprite(width/2, height-25, 50, 50);
player.addImage(playerImage);
enemy = createSprite(width/2, 0, 10, 30);
enemy.addImage(enemyImage);
} 
 
 
function draw() { 
    if (isGameOver) { 
        gameOver(); 
    } else { 
        if (enemy.overlap(player)) { 
            isGameOver = true; 
        } 
        // ...the rest of the draw function 
        background(0, 0, 100); 
 
 
        if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) { 
          player.position.x = player.position.x + 5; 
        } 
 
 
        if (keyDown(LEFT_ARROW) && player.position.x > 25) { 
          player.position.x = player.position.x - 5; 
        } 
 
 
        enemy.position.y = enemy.position.y + 6; 
 
 
        if (enemy.position.y > height) { 
          enemy.position.y = 0; 
          enemy.position.x = random(5, width-5); 
        } 
 
 
        drawSprites();         
    } 
} 
 
 
 