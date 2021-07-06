var seaImg 
var shipImg1 
var sea
var ship
var fishImg
var fish
var flag = 0

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
fishImg = loadImage("fish.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200)
  sea.addImage(seaImg)
  sea.scale = 0.3
  sea.velocityX = -5
  ship = createSprite(110, 230)
  ship.addAnimation("ship", shipImg1)
  ship.scale = 0.2
  fish = createSprite(300, 250)
  fish.addImage(fishImg)
  fish.visible = false
  fish.scale = 0.2
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width/8
  }
  if (keyDown("space")) {
    fish.visible = true
    fish.velocityX = 3
    fish.velocityY = -3
    flag = 1
  }
  if (flag === 1) {
    fish.velocityY += 0.25
  
  }
 drawSprites()
}

