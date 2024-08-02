function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  
  function draw() {
    stroke("rgb(174,255,236)");
    fill("#673AB7");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    
    }
  }