const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var coffee
var water
var waterIMG
var backgroundIMG


function preload() {
    waterIMG=loadImage("water.png")
    backgroundIMG=loadImage("background1.jpg")
}

function setup(){
    canvas = createCanvas(800,500);
    engine = Engine.create()
    world = engine.world
    coffee= new Coffee(400,470,130,70)
}

function draw(){
   background(backgroundIMG)
   Engine.update(engine)
   coffee.display()
}