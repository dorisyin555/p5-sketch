function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  myShape(10,10,mouseX,mouseY)
}

function myShape(x,y,w,h) {
  fill("rgb(245,175,175)")
  ellipse(x+w,y+h/2,w,h/2)
  
  fill("rgb(230,184,68)")
  rect(x+w/2,y+h/2,w/2,h)
  // rect(150,150,30,200)
  rect(x+w,y+h/2,w/2,h)
  // rect(180,150,30,200)
  
  fill("silver")
  rect(x+w/2,y+h/2,w,h/4)
  
  fill("beige")
  triangle(x+w/2,y+9*h/6,x+3*w/2,y+9*h/6,x+w,y+6*h/3)
  // triangle(150,350,210,350,180,400)
  
  fill("black")
   beginShape()
  vertex(x + w, y + 6*h/3)
  vertex(x + 3*w/4, y + h*1.75)
  vertex(x + 5*w/4, y + h*1.75)
  endShape()
}