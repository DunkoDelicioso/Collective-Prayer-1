var angle = 0;
let intro = true
let organic = 0
let rate1 = 0;
let rate = 0;
let frate = 12;
let button;
let canvas;

function preload() {
  song = loadSound('Background.mp3');
}

function setup() {
  noStroke();
  canvas = createCanvas(400, 500);
  canvas.id('mycanvas');
  background(0, 255)
  canvas.parent('sketch-container');
  background(0)
  document.getElementById("button").addEventListener("click", function () {
    document.getElementById("text").innerText = "Thank You for your Participation!";
    save('receipt.jpg');
});
}


function draw() {
let tide = 1;
background(0, 255)
frameRate(frate)

stroke(255);
let x = 0
let y  = 300
let d = day();
let m = month();
let h = hour();
let mi = minute();
let s = second();
let mil = millis();
let len = (d * m * h * mi * s) /2
let organic = map(len, 0, 200000, 10, 40)



angle = len/10000

ang = map(d,1, 31, 0, 360)
ang1 = map(m, 1, 12, 0, 360)
ang2 = map(h, 1, 24, 0, 360)
ang3 = map(mi, 1, 60, 0, 360)
ang4 = map(s, 1, 60, 0, 360)


strokeWeight(1)
fill(255, 255)
ellipse(30, 40, 30)
ellipse(180, 40, 20)
ellipse(280, 40, 10)

noFill()
stroke(255, 255)
ellipse(225, 40, 10)
ellipse(105 , 40, 35)

push();
translate(180, 40);
rotate(ang2)
ellipse(15, 15, 10)
pop();

push();
translate(40, 40);
rotate(ang)
ellipse(15, 25, 15)
pop();

push();
translate(280, 40);
rotate(ang4)
ellipse(15, 15, 15)
pop();

push();
fill(255)
translate(120, 40);
ellipse(15, 15, 15)
rotate(ang1)
pop();

push();
translate(225, 40);
rotate(ang3)
ellipse(15, 5, 5)
pop();

line(40, 85, 360, 85)
line(40, 430, 360, 430)


strokeWeight(1)

textSize(12);
text(m, 330, 20)
text(d, 350, 20)
text(h, 370, 20)
text(mi, 340, 40)
text(s, 365, 40)

push();
translate(200, 400);
branch(organic, x);
pop();

if(intro){
  translate(0, 0)
  push();
  fill(0)
  rect(0, 0, width, height)
  fill(255)
  textFont('Franklin Gothic Medium')
  text("Click anywhere to begin", width/3, height/2)
  pop();
}

}

function mousePressed(){
  if(intro == true){
    song.loop()
    song.rate(0.5)
  }
  intro = false;
  
}


function branch(len, x) {
  rate += 0.00001
  rotate(rate)
  stroke(255)
  strokeWeight(1)
  line(0, 0, 0, -len);
  translate(0, -200);
  line(0, 0, 0, +len);
  translate(0, -len);
  if (len > 4) {

    push();
    rotate(angle);
    strokeWeight(len * 0.05)
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle * len);
    strokeWeight(len * 0.03)
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.3);
    pop();

  

  }


}

function keyPressed() {
  let rando = random(1, 40)
  if(intro == false){
    rate += 0.5
    
    song.jump(rando, 40);

  }
  noStroke()
  fill(random(0, 255), random(0, 255), random(0, 255), 255);
  rect(random(0, width), random(0, height), random(1, 20), random(1,20))

}






  








