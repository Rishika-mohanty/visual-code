var cat,mouse,bg,canvas;
var catImg1,catImg2,catImg3,bg,mouseImg1,mouseImg2,mouseImg3;
function preload() {
    
  bg = loadImage("images/garden.png");  
  catImg1 = loadAnimation("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
  catImg3 = loadAnimation("images/cat4.png");
  mouseImg1 = loadAnimation("images/mouse1.png");  
  mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png"); 
  mouseImg3 = loadAnimation("images/mouse4.png"); 
  
}
function setup(){
    canvas = createCanvas(1000,800);

  cat = createSprite(870,600,50,40);
  cat.addAnimation("ecrv",catImg2);
  cat.scale = 0.2;
  cat.velocityX = -5;

  mouse = createSprite(240,620,20,30);
  mouse.addAnimation("ftbb",mouseImg2);
  mouse.scale = 0.12;
  
}

function draw() {

    background(bg);
    
   if(cat.x-mouse.x < cat.width/2 - mouse.width/2 ){
     cat.velocityX = 0;
     cat.addAnimation("catRunning",catImg3);
     cat.x = 300;
     cat.changeAnimation("catRunning");

     mouse.addAnimation("fbgby",mouseImg3);
     mouse.changeAnimation("fbgby");
   }  

    drawSprites();
}


