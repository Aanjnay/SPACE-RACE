var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["14f5f7bf-9b74-4301-9652-8049cc042d40"],"propsByKey":{"14f5f7bf-9b74-4301-9652-8049cc042d40":{"name":"unnamed.png_1","sourceUrl":null,"frameSize":{"x":290,"y":410},"frameCount":2,"looping":true,"frameDelay":5,"version":"fQF.2xciO8J7IKZ6CbsU1u0uhhc18GJn","loadedFromSource":true,"saved":true,"sourceSize":{"x":580,"y":410},"rootRelativePath":"assets/14f5f7bf-9b74-4301-9652-8049cc042d40.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var gameState = "menu";
 var rocket1 = createSprite(110,338,10,10);
    rocket1.scale = "0.09";
    rocket1.setAnimation("unnamed.png_1");
    var rocket2 = createSprite(290,338,10,10);
    rocket2.scale = "0.09";
    rocket2.setAnimation("unnamed.png_1");
    var player1Score = 0;
    var player2Score = 0;
    var rock1 = (403,80,5,5);
    rock1.velocityX = 5;
    var rock1 = createSprite(403,80,5,5);
    rock1.velocityX = -5;
    rock1.shapeColor = "white";
    var rock2 = createSprite(-3,100,5,5);
    rock2.velocityX = 3;
    rock2.shapeColor = "white";
    var rock3 = createSprite(-3,15,5,5);
    rock3.velocityX = 7;
    rock3.shapeColor = "white";
    var rock4 = createSprite(403,170,5,5);
    rock4.velocityX = -5;
    rock4.shapeColor = "white";
    var rock5 = createSprite(-3,132,5,5);
    rock5.velocityX = 7;
    rock5.shapeColor = "white";
    var rock6 = createSprite(-3,132,5,5);
    rock6.velocityX = 7;
    rock6.shapeColor = "white";
    var rock8 = createSprite(403,27,5,5);
    rock8.velocityX = -7;
    rock8.shapeColor = "white";
    var rock9 = createSprite(470,27,5,5);
    rock9.velocityX = -6;
    rock9.shapeColor = "white";
    var rock10 = createSprite(-400,100,5,5);
    rock10.velocityX = 6;
    rock10.shapeColor = "white";
    var rock11 = createSprite(-800,27,5,5);
    rock11.velocityX = -6;
    rock11.shapeColor = "white";
    var rock12 = createSprite(-3,148,5,5);
    rock12.velocityX = 4;
    rock12.shapeColor = "white";
    var rock13 = createSprite(403,209,5,5);
    rock13.velocityX = -7;
    rock13.shapeColor = "white";
    var rock14 = createSprite(-3,220,5,5);
    rock14.velocityX = 4;
    rock14.shapeColor = "white";
    
createEdgeSprites();
function draw() {
  background("black");
  if(gameState === "menu"){
   textSize(20);
    noStroke();
    fill("white");
    textSize("50");
    text("Welcome To",72,57);
    textSize("40");
    text("SPACE RACE",80,120);
    text("Press Space",90,235);
    text("To Start",130,300);
    textSize(10);
    text("UP_ARROW",303,283);
    text("DOWN_ARROW",305,330);
    text("W",60,283);
    text("S",60,330);
    
  }
   if(gameState === "play"){
     if(rocket1.isTouching(topEdge)){
       rocket1.y =338;
       player1Score +=1;
     }
     if(rocket2.isTouching(topEdge)){
       rocket2.y =338;
       player2Score +=1;
     } 
     textSize(90);
     text(player1Score,30,380);
    text(player2Score,320,380);

    if(keyDown("w")){
    rocket1.y = rocket1.y -2;
  }
  if(keyDown("s")){
    rocket1.y = rocket1.y +2;
  }
  if(keyDown("up")){
    rocket2.y = rocket2.y -2;
  }
  if(keyDown("down")){
    rocket2.y = rocket2.y +2;
  }
  }
 
  if(player1Score == 5 || player2Score ==5){
textSize(50);
    text ("Round Over",88,59);
    textSize(40);
    text("Press R to Restart",35,143);
        gameState = "end";

  }
  if(gameState === "menu" && keyDown("space")){
    gameState = "play";
    

  }
  if(gameState === "end" && keyDown("r")){
    player1Score = 0;
    player2Score = 0;
    rocket1.y=338;
    rocket2.y =338;
      gameState = "menu";
    
  }
  if(rock1.isTouching(leftEdge)){
    rock1.x = 403;
  }
if(rock2.isTouching(rightEdge)){
    rock2.x = -3;
  }
  if(rock3.isTouching(rightEdge)){
    rock3.x = -3;
  }
  if(rock4.isTouching(leftEdge)){
    rock4.x = 403;
  }
  if(rock5.isTouching(rightEdge)){
    rock5.x = -3;
  }
  if(rock6.isTouching(rightEdge)){
    rock6.x = -3;
  }
  
  if(rock8.isTouching(leftEdge)){
    rock8.x = 403;
  }
  if(rock9.isTouching(leftEdge)){
    rock9.x = 470;
  }
  if(rock10.isTouching(rightEdge)){
    rock10.x = -400;
  }
  if(rock11.isTouching(rightEdge)){
    rock11.x = -800;
  }
  if(rock12.isTouching(rightEdge)){
    rock12.x = -3;
  }
  if(rock13.isTouching(leftEdge)){
    rock13.x = 403;
  }
  if(rock14.isTouching(rightEdge)){
    rock14.x = -3;
  }
  
  
  if(rock1.isTouching(rocket1)){
    resetPosition1();
  }
if(rock2.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock3.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock4.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock5.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock6.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock8.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock9.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock10.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock11.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock12.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock13.isTouching(rocket1)){
    resetPosition1();
  }
  if(rock14.isTouching(rocket1)){
    resetPosition1();
  }
  
  
  if(rock1.isTouching(rocket2)){
    resetPosition2();
  }
if(rock2.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock3.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock4.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock5.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock6.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock8.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock9.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock10.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock11.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock12.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock13.isTouching(rocket2)){
    resetPosition2();
  }
  if(rock14.isTouching(rocket2)){
    resetPosition2();
  }
  if(rocket1.isTouching(topEdge) || rocket2.isTouching(topEdge)){
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3",false);
  }
  drawSprites();
  
}
function resetPosition1(){
  rocket1.y =338;
}
function resetPosition2(){
  rocket2.y =338;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
