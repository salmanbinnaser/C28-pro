const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    crumpledPaper = new Paper(100,465);

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
    
    Slingshot=new Throw(stones.body,{x:100,y:465})
}

function draw(){
    background("black");
    Engine.update(engine);

    
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display();
    Slingshot.display(); 
      
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Slingshot.fly()
}
