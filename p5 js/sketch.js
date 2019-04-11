let fft, mic;
var vol = 0
let speechRec;
let square;

function setup() {
  createCanvas(710, 400);
    noFill();
  // Create an Audio input
  mic = new p5.AudioIn();
     // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function toggle(){
  createCanvas(710, 400);
    mic = new p5.AudioIn();
    mic.start();
  var vol = mic.getLevel();
  
  fill(127,200,200);
  stroke(0);
  
  // Draw an ellipse with height based on volume
  var h = map(vol, 0, 0.5, height, 0);
  ellipse(width/2, h - 25, 50, 50);
    
}


function draw() {
  background(250,200,200);
    
  let spectrum = fft.analyze();

  beginShape();
    stroke (255);
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
    
//  button.mousePressed(toggle);
}

//function mousePressed() {
//    background(55);
//  var vol = mic.getLevel();
//  
//  fill(127);
//  stroke(0);
//  
//  // Draw an ellipse with height based on volume
//  var h = map(vol, 0, 0.5, height, 0);
//  ellipse(width/2, h - 25, 50, 50);
//}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
