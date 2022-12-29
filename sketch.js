let canvas;
let title;

function setup () {
  title = createElement('title', 'Rotating Shapes with Pointers');

  //template for canvas while printing and exporting/exhition on web/minimal
  canvas = createCanvas(1024, 1024); // will export as 512x512
  canvas.style("margin", "auto");
  canvas.style("margin-top", "5%");
  canvas.style("display", "flex");
  canvas.style("justify-content", "center");
  canvas.style("align-items", "center");
  canvas.style("border-radius", "10px");
  canvas.style("position", "relative");
  canvas.style("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
  canvas.style("zoom", "0.5");
  canvas.style('dpi', '300');
  canvas.style('bleed', '1/8');
  noCursor();
}


// Render loop that draws shapes with p5
function draw(){
  background(255);
  
  // Use the minimum screen size for relative rendering
  const dim = Math.min(width, height);
  
  // Set up stroke and disable fill
  strokeJoin(ROUND);
  strokeWeight(dim * 0.005);
  stroke(0);
  noFill();
  
  // Get time in seconds
  const time = second();
  const  timeMin = minute()
  const  timeHour = hour()
  const  timeSec = second()

  console.log( timeHour + ":" + timeMin + ":" + timeSec)
  

  
  const duration = 60;
  const playhead = time / duration % 1;
  const rotation = playhead * PI * 2;
  const x = width / 2;
  const y = height / 2;
  const size = dim * 0.6;
  push();
  translate(x, y);
  rotate(rotation);
  rectMode(CENTER);
  rect(0, 0, size, size);
  fill(0)
  rect(0, -size/2, 5, size/4);
 
  pop();



   const durationMin = 60;
  const playheadMin = timeMin / durationMin % 1;
  const rotationMin = playheadMin * PI * 2;
  const xMin = width / 2;
  const yMin = height / 2;
  const sizeMin = dim * 0.4;
  push();
  translate(xMin, yMin);
  rotate(rotationMin);
  rectMode(CENTER);
   rect(0, 0, sizeMin, sizeMin);
    fill(0)
  rect(0, -sizeMin/2, 8, sizeMin/3);
  pop();

   const durationHour = 24;
  const playheadHour = timeHour / durationHour % 1;
  const rotationHour = playheadHour * PI * 2;
  const xHour = width / 2;
  const yHour = height / 2;
  const sizeHour = dim * 0.18;
  push();
  translate(xHour, yHour);
  rotate(rotationHour);
  rectMode(CENTER);
    rect(0, 0, sizeHour, sizeHour);
    fill(0)
   rect(0, -sizeHour/2, 14, sizeHour/2);
  
  pop();

}

function keyPressed() {
  let m = month();
  let d = day();
  let y = year();
  let t = hour() + ':' + minute();
  if (key == 'S' || key == 's') 
    saveCanvas(canvas, 'canvas' + m + d + y + t , 'png');
}
  