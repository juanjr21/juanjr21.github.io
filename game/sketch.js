var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(132,222,2);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  ellipse(bally,bally, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(bally, ballx, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(ballx, bally, mouseY);
  ellipse(ballx, bally, mouseX);
  line(ballx, bally, mouseX,mouseY)
  
} // end level one

function levelTwo(){
  background(132,222,2);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  ellipse(ballSize,ballSize,mouseX, mouseY)
  ellipse(ballSize,ballSize,mouseY, mouseX)
  ellipse(bally,bally, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(bally, ballx, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(ballx, bally, mouseY);
  ellipse(ballx, bally, mouseX);
  ellipse(ballx, bally, mouseX);
  (ballx, bally, mouseX, mouseY);
} // end level two

function levelThree(){
    background(132, 222, 2);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  ellipse(ballSize,ballSize,mouseX, mouseY)
  ellipse(ballSize,ballSize,mouseY, mouseX)
  ellipse(ballSize,ballSize,mouseX, mouseY)
  ellipse(ballSize,ballSize,mouseY, mouseX)
  ellipse(ballSize,ballSize,mouseX, mouseY)
  ellipse(ballSize,ballSize,mouseY, mouseX)
  ellipse(bally,bally, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(bally, ballx, mouseX)
  ellipse(ballx, bally, mouseY)
  ellipse(ballx, bally, mouseY);
  ellipse(ballx, bally, mouseX);
  ellipse(ballx, bally, mouseX);
  (ballx, bally, mouseX, mouseY);
} // end level thre

