function launchPinball() {

  if(pinballGroup.length < pinballMax && drumGroup.length > drumMin){

    pinball = createSprite(canvasWidth/2, 0);
    // shadow = createSprite(canvasWidth/2, canvasWidth/2);


    // pinball
    pinball.addImage(pinballImage);
    pinball.mass = random(0, 1);
    pinball.setCollider("circle", 0, 0, 25);
    pinball.setSpeed(10, random(0, 360));
    pinball.debug = false;
    pinball.mass = 1;
    pinballGroup.add(pinball);

    // shadow.addImage(shadowImage);
    // shadow.mass = 0;
    // shadow.setSpeed(pinball.speed);
    // shadow.mass = 0;
  }
}


function triggerSound(pinball, drum) {

  if(!soundIsPlaying) {

    // lock sound player
    // soundIsPlaying = true;

    drum.icon.sound.play();
    drum.hitCounter++;

    if(canvasIsSmall){
      drum.addImage(drum.icon.image_colorSmall);

      // wait for audio to play and unlock
      setTimeout(function(){
        drum.addImage(drum.icon.image_whiteSmall);
      }, drum.icon.duration * 100);

    } else {
      drum.addImage(drum.icon.image_colorLarge);

      // wait for audio to play and unlock
      setTimeout(function(){
        drum.addImage(drum.icon.image_whiteLarge);
      }, drum.icon.duration * 100);
    }

    // location of color bleed
    var trace = {
      x: drum.position.x,
      y: drum.position.y,
      color: drum.icon.color
    }
    traceLocations.push(trace);

    // Rocket fuel
    pinball.velocity.x *= 1.05;
    pinball.velocity.y *= 1.05;

    // Kill the dead Drum
    if(drum.hitCounter === drumHitMax) {
        drumCounter--;
        drum.remove();
    }
  }
}

var Growth = function(drum) {
  var rate;
  var timer;



}
