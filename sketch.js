
 
 

let squareImg=[];
let numSquareImg=5;

let rectImg=[];
let numRectImg=4;
  
let x=300
let y=500
let a=50
let b=100

let r1
let r2
let r3
let r4
 let karla


function preload() {
  squareImg1 = loadImage("shapes-1/pinkflower.png");
  squareImg2 = loadImage("shapes-1/pinktriangle.png");
  squareImg3 = loadImage("shapes-1/redsun.png");
  squareImg4 = loadImage("shapes-1/greenflower.png");
  squareImg5 = loadImage("shapes-1/Squiggles2.png");
  squareImg = [squareImg1, squareImg2, squareImg3, squareImg4, squareImg5];
  
   rectImg1 = loadImage("images2/20230617062559_00131.png");
  rectImg2 = loadImage("images2/20230619023713_00019.png");
 rectImg3 = loadImage("images2/20230619023713_00026.png");
 rectImg4 = loadImage("images2/20230619030234_00006.png");
  rectImg = [rectImg1, rectImg2, rectImg3, rectImg4];
  
  karla=loadFont("fonts/Karla-SemiBold.ttf")
  founders=loadFont("fonts/FoundersGrotesk-Bold.otf")
}
  


function setup() {
 
 cnv= createCanvas(400, 700);
   
  
  resetSketch ();
  
  var button = createButton("generate");
  button.style('font-size', '20px');
  button.style('font-family','karla');
  button.style('background-color', '#EAA8CB');
    button.style('background-color', '#EAA8CB');
  button.size (110,40)

  button.position(290,710)
  button.mousePressed(resetSketch);
  
  
function resetSketch (){
  cnv=createCanvas(400, 700);
loop();
  r1=random(-50,350);
  r2=random(0,300);
  r3=random(-50,350);
  r4=random(300,550)
 


}

}
function draw() {
  noLoop();
   background('#FAF4EF');
  // if (random(rectImg)===rectImg4){
  //   x=150;
  //  y=200;
 //    a=30
 //    image(squareImg3,220,100,150,200);
    // image(squareImg2,220,350,150,200);
   //  image(rectImg3,30,350,150,200);
 // }
 
 image(random(rectImg),a,b,x,y);
image(random(squareImg),r1,r2,150,150);
  
  image(random(squareImg),r3,r4,150,150);
  
  textFont(karla)
  textSize(20)
text("Two Toes Creative", 50,90);

   //loop();
 
  
}

