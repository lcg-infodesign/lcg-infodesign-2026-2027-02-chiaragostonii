// function preload() {
//   // put preload code here
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);

  background(0);

    //disegno glifi una volta sola 
let numeroGlifi = 100;
let numeroColonne = ceil(sqrt(numeroGlifi));
let numeroRighe = ceil(numeroGlifi / numeroColonne); 

let sizeGlifo = random(40, 70); 

let xCorrente = 0;
let yCorrente =0;
let dimColonna = windowWidth / numeroColonne;
let dimRiga = windowHeight / numeroRighe;



  for(let g =0; g < numeroGlifi; g++){
    let sizeGlifo = random(40, 70); 

  mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, sizeGlifo);
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

function mioGlifo(x, y, sizeGlifo){
  push();
  translate(x, y);
 
  if(sizeGlifo >= 50 && sizeGlifo < 65){
    fill(255, 255, 255);
  } else if (sizeGlifo >= 65 && sizeGlifo < 70){
    fill (90, 7, 70);
  } else {   
    fill (134, 7, 70);
  }

    rect(0, 0, sizeGlifo, sizeGlifo, 10);
    pop(); 
 }



  
