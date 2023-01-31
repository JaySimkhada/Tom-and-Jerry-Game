var bg, bgImg
var jerry, jerryImg
var tom, tomImg

function preload(){
bgImg = loadImage("assets/garden-backyard.png");
jerryImg = loadImage("assets/jerry running 1 png.png");
tomImg = loadImage("assets/tom running 1 png.png");
}

function setup(){

createCanvas(1800,800);

//background image
bg = createSprite(400,100,400,20);
bg.addImage(bgImg);
bg.scale = 0.8;
bg.x = width/2;

tom = createSprite(50,200,20,50);
tom.addImage(tomImg);

}

function draw() {
  
  background("black");

   
        drawSprites();
        
}