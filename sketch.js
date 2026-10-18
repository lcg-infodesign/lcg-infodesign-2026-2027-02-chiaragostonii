function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);

  background(180, 148, 135);
strokeWeight(0)
  angleMode(DEGREES);

  //disegno glifi una volta
  //griglia e numero di glifi che voglio
let numeroGlifi = 100;
let numeroColonne = ceil(sqrt(numeroGlifi)); //calcola la radice quadrata 
let numeroRighe = ceil(sqrt(numeroGlifi));
let qualeForma = random(3)
//coordinate iniziali da dove far partire la mia composizione
let xCorrente =0;
let yCorrente =0;
//dimensioni delle colonne o righe
let dimColonna = windowWidth / numeroColonne;
let dimRiga = windowHeight / numeroRighe;


for(let g=0; g < numeroGlifi; g++){
  mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimRiga*0.95);
  xCorrente = xCorrente + dimColonna;
    if(xCorrente >= windowWidth){
    xCorrente = 0;
    yCorrente = yCorrente + dimRiga;
  }
}
}

function draw() {
  // put drawing code here
}

function mioGlifo(x, y, size){
  push();



  translate(x, y);
    rectMode(CENTER);

  
let randomColor = random(1, 100);

    if (randomColor<20){
      fill(101, 11, 46);
    } else if(randomColor<70){
      fill(243, 231, 216); 
    }else{
      fill(163, 28, 44);
    }


  rect(0, 0, size, size, 20);
  fill(0);
    rect(0, 0, size/2, size/2, 5);


let quanteForme = ceil(random(2, 4));

for(let i=0; i < quanteForme; i++){
  // let xForma = random(-size*0.25, size*0.25);
  // let yForma = random(-size*0.25, size*0.25);

  miaForma(i+1, size);
} 

  pop();  
}

function miaForma(posizione, size) {
  let sizeCerchio = random((size/4)*0.7, size/4); 
  let sizeQuadrato = random((size/4)*0.7, size/4); 
  let qualeForma = ceil(random (3));
  //coordinate posizione
  let x1 = -size/8;
  let y1 = -size/8;
  let x2 = size /8;
  let y2 = -size/8;
  let x3 = size/8;
  let y3 = size/8;
  let x4 = -size/8;
  let y4 = size/8;

  let x = 0;
  let y = 0;



  if(posizione == 1){
    x = x1;
    y = y1;
  } else if(posizione==2){
    x = x2;
    y = y2;
  } else if(posizione==3){
    x = x3;
    y = y3;
  }else{
    x = x4;
    y = y4;
  }






  
  if(qualeForma == 1) {
    fill(255,0,0);
    circle(x, y, sizeCerchio);  
} else if (qualeForma == 2) {
    fill(0,255,0);
    rect(x, y, sizeQuadrato);
} else if(qualeForma == 3){
  push();
    rotate(random(12));  
    fill(0,0,255);
    rect(x, y, sizeQuadrato);
  pop();
  } else{

  }
}

