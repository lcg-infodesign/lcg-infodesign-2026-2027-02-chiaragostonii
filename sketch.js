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

//ciclo per scegliere il colore random tra tre colori della base del sushi
  if (randomColor<20){
    fill(101, 11, 46);
  } else if(randomColor<70){
    fill(243, 231, 216); 
  }else{
    fill(163, 28, 44);
  }
  push();
  stroke(0);
  strokeWeight(1.5);
  //quadrato di base del sushi
    rect(0, 0, size, size, 20);
  pop();
    //quadrato interno, alga del sushi
  fill(0);
  rect(0, 0, size/2, size/2, 5);


let quanteForme = ceil(random(2, 4)); //numero di forme random del ripieno del sushi

for(let i=0; i < quanteForme; i++){

  miaForma(i+1, size);
} 

  pop();  
}

function miaForma(posizione, size) {
  let sizeCerchio = random((size/4)*0.7, size/4); //dimensioni dei cerchi del ripieno del sushi
  let sizeQuadrato = random((size/4)*0.7, size/4); //dimensioni dei quadrati dei ripieni del sushi
  let qualeForma = ceil(random (3)); //scelta casuale della forma da usare nel ripieno del sushi
  
  //coordinate posizione di ogni elemento del ripieno del sushi
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


//posizioni dei vari elementi casuali del ripieno del sushi
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


//colore condimento interno sushi
let coloreSushi = ceil(random(10));
  if(coloreSushi==1){
    fill(188,207,150);
  }else if(coloreSushi==2){
    fill(152,192,63);
  }else if(coloreSushi==3){
    fill(100,169,57);
  }else if(coloreSushi==4){
    fill(241,229,83);
  }else if(coloreSushi==5){
    fill(230,204,118);
  }else if(coloreSushi==6){
    fill(209,51,32);
  }else if(coloreSushi==7){
    fill(245,133,88);
  }else if(coloreSushi==8){
    fill(245,135,112);
  }else if(coloreSushi==9){
    fill(234,188,174);
  }else {
    fill(169,11,74);
  }


//ciclo per la scelta casuale della forma del condimento interno sushi
  if(qualeForma == 1) {
    circle(x, y, sizeCerchio);  
} else if (qualeForma == 2) {
    rect(x, y, sizeQuadrato, sizeQuadrato, 5);
} else if(qualeForma == 3){
    push(); //il push e il pop servono per isolare la rotazione solo quando il ciclo cade in questo caso
    
    rotate(random(12));  //rotazione solo di questi quadrati
    rect(x, y, sizeQuadrato, sizeQuadrato, 5);
    
    pop();
  } else{
//non metto niente per lasciare comunque la modularità dentro il ripieno del sushi nel caso in cui in un ripieno vengano solo 3 forme
  }
}

