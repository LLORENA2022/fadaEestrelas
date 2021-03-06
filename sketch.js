var starImg,bgImg;
var star, starBody;
var imgFada, fada
var music
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada=createSprite(200,500)
    fada.addAnimation("fadaVoando", imgFada)
    fada.scale = 0.20
    

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw() {
    background (bgImg);
    star.x= starBody.position.x 
    star.y= starBody.position.y


    if(star.y > 470 && starBody.position.y > 470){
    Matter.Body.setStatic(starBody,true);
    }
    
   
  
drawSprites();
}
function keyPressed(){ 
    if(keyCode === LEFT_ARROW){ 
    fada.x= fada.x-5; 
    music.play();} 
    if(keyCode===RIGHT_ARROW){ 
    fada.x= fada.x+5 ; 
    music.play();}
    if(keyCode===DOWN_ARROW){ 
    Matter.Body.setStatic(starBody,false);
    music.play();
    
 } }