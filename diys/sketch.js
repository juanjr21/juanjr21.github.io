
var img;
var initials ='jj'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken


function setup() {
createCanvas(1280, 700);  // canvas size
background(255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
    stroke(125);
    strokeWeight(4);
     line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // third tool
    stroke(53,13,255);
    strokeWeight(41);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') {
    stroke(255, 255, 255);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '5') { // this tool calls a function
    stroke(239,239,255);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {
    fill(178,166,255,20);
    strokeWeight(0)
   ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '7') {
    fill(102,184,255,20);
    strokeWeight(0)
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '8') {
    fill(255, 255, 255, 80);
    strokeWeight(0);
    ellipse(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '9') {
    fill(255,219,172,80);
    strokeWeight(0)
    ellipse(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '0') {
    fill(30,30,30,10)
    strokeWeight(0)
    rect(mouseX, mouseY, 30, 20, 55, 55, 20);

  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}

