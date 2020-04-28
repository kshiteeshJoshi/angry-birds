const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird,slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,30,30);
    box2 = new Box(920,320,30,30);
    pig1 = new Box(810,350,30,30);
    log1 = new Box(810,260,30,30);

    box3 = new Box(700,240,30,30);
    box4 = new Box(920,240,30,30);
    pig3 = new Box(810,220,30,30);

    log3 =  new Box(810,180,30,30);

    box5 = new Box(810,160,30,30);
    log4 = new Box(760,120,30,30);
    log5 = new Box(870,120,30,30);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


if (function mouseReleased(){
    slingshot.fly();
}){
    function mouseReleased(){
        slingshot.fly();
    }
    bird1 = new Bird(100,100)
    slingshot = new Slingshot(bird.body,{x:200, y:100});
}