const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(1100,350);
    rubber = new Rubber(900,450,70);
    stone= new Stone(400,360,50,50);
    iron = new Iron(600,340,80,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}