var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	/*wall1sprite = createSprite(350, 625, 10, 50)
	wall2sprite = createSprite(450, 625, 10, 50)
	wall3sprite = createSprite(400, 650, 100, 10)
	wall1sprite.shapeColor = color("red")
	wall2sprite.shapeColor = color("red")
	wall3sprite.shapeColor = color("red")*/

	engine = Engine.create();
	world = engine.world;

	options = {isStatic:true, restitution:0.5}
	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);

	wall1 = Bodies.rectangle(295, 625, 10, 50, {isStatic: true})
	wall2 = Bodies.rectangle(410, 625, 10, 50, {isStatic: true})
	wall3 = Bodies.rectangle(350, 650, 120, 10, {isStatic: true})
	
	World.add(world, wall1)
	World.add(world, wall2)
	World.add(world, wall3)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true});
	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  /*wall1sprite.x = wall1.position.x
  wall1sprite.y = wall1.position.y
  wall2sprite.x = wall2.position.x
  wall2sprite.y = wall2.position.y
  wall3sprite.x = wall3.position.x
  wall3sprite.y = wall3.position.y*/
  fill ("red")
  rect(wall1.position.x, wall1.position.y, 10,50)
  rect(wall2.position.x, wall2.position.y, 10,50)
  rect(wall3.position.x, wall3.position.y, 120,10)


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false)
	
 }
}