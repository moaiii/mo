// // window resize
// window.onresize = function () {
//
//
//   // ellipse(5, 5, CANVAS_DATA.dimensions.w-5, CANVAS_DATA.dimensions.h-5);
// }


function drawDots(grid) {
  for(i = 0; i < 36; i++){
    ellipse(grid[i].x, grid[i].y, 10, 10);
  }
}


/**
 *  Canvas draw loop
 */
function draw() {
  
  var data = CANVAS_DATA;

  background('#FDE9D9'); //pink '#DBF0E1' '#F6E0EA'

  drawDots(data.grid);

  fill(0);

  // ellipse(CANVAS_DATA.dimensions.w/2, CANVAS_DATA.dimensions.h/2, 20, 20);

  // color discharge
  if(traceLocations.length > 0) {
    iconArt();
  }

  // get rotation of the device
  gyroX = radians(rotationY);
  gyroY = radians(rotationX);

  // map rotation to gravity
  gravityY = map(gyroY, -1.6, 1.6, -gravityRange, gravityRange);
  gravityX = map(gyroX, -1.6, 1.6, -gravityRange, gravityRange);

  // apply gravity acceleration
  for( i = 0; i < pinballGroup.length; i++ ) {
    pinballGroup[i].velocity.y += gravityY;
    pinballGroup[i].velocity.x += gravityX;
  }

  // Canvas edge boundaries
  checkBoundaries(CANVAS_DATA.dimensions);

  // Launch pinball
  if ( key === 'p' ) {
    launchPinball();
  }

  // Colliders
  pinballGroup.bounce(pinballGroup);
  pinballGroup.bounce(drumGroup, triggerSound);

  // Setting the volume
  if(hasVolume) {
    masterVolume(1);
  } else {
    masterVolume(0);
  }

  // Render Animations
   drawSprites();
}


function checkBoundaries(dimensions) {

  for(var i=0; i<pinballGroup.length; i++) {

    var p = pinballGroup[i];

    if(p.position.x < 0) {
      p.position.x = 1;
      p.velocity.x = abs(p.velocity.x) * edgeDamping;

    } else if (p.position.x > dimensions.w) {
      p.position.x = dimensions.w-1;
      p.velocity.x = -abs(p.velocity.x) * edgeDamping;

    } else if (p.position.y < 0) {
      p.position.y = 1;
      p.velocity.y = abs(p.velocity.y) * edgeDamping;

    } else if (p.position.y > dimensions.h) {
      p.position.y = dimensions.h-1;
      p.velocity.y = -abs(p.velocity.y) * edgeDamping;
    }
  }
}


function overlayInstructions () {

  $(".instructions").css({
    "visibility": "visible !important",
    "width": canvasWidth,
    "height": canvasHeight,
    "left": canvasTopLeft.left,
    "top": canvasTopLeft.top
  });
}
