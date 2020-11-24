const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var ground,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
        element:document.body,
        engine: engine,
        options: {
          width: 400,
          height: 400,
          wireframes:false,
          showAngleIndicator: true,

        },
       
      });
      Render.run(render);

     
    box1 = new Box( 200,300,50,50)
    box2 = new Box( 240,100,50,100);
    
    ground = new Ground( 200,390,400,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
     
    box1.display();
    box2.display();
    ground.display();
}