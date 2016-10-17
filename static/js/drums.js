
function createDrum () {

  if( drumCounter < drumMax && drums.length > 0 ) {

    var index = Math.round( Math.random() * CANVAS_DATA.size );

    CANVAS_DATA.size--;

    var point = CANVAS_DATA.grid.splice(index, 1);
    var positionX = point[0].x;
    var positionY = point[0].y;
    var positionID = point[0].id;

    var drum = createSprite(positionX, positionY);
    var index = Math.floor(Math.random() * drums.length);
    var drum_Obj = drums.splice(index, 1);

    drum.name = 'target-' + (drumCounter + 1);
    drum.gridId = positionID;
    drum.hitCounter = 0;
    drum.icon = drum_Obj[0];

    if(CANVAS_DATA.dimensions.small) {
      drum.addImage(drum.icon.image_whiteSmall);
      drum.setCollider("circle", 0, 0, 25);
    } else {
      drum.addImage(drum.icon.image_whiteLarge);
      drum.setCollider("circle", 0, 0, 50);
    }

    drum.immovable = true;
    drum.debug = false;
    drumGroup.add(drum);

    // console.log(drum);

    // drum.onMousePressed = function() {
    //   drum.onMouseReleased = function() {
    //     console.log(this.position.x,this.position.y, dragClick.upX, dragClick.upY);
    //     this.position.x = dragClick.upX;
    //     this.position.y = dragClick.upY;
    //   }
    // }

    console.log(traceLocations);

    drumCounter++;
    // drumButtonToggle();

  } else if ( drumCounter < drumMax && drums.length === 0 ) {

    console.log("out of drums");
    outOfDrums();
    pinball.remove();

  } else {

    overlayInstructions();

  }
}


// function drumButtonToggle() {
//
//   drumDOMButton = document.getElementsByClassName('addDrumButton')[0];
//   drumDOMButton.disabled = (drumCounter === drumMax) ? true :false;
// }


function outOfDrums() {

  $(".outOfDrums").css({
    "visibility": "visible !important",
    "width": canvasWidth,
    "height": canvasHeight,
    "left": canvasTopLeft.left,
    "top": canvasTopLeft.top
  });

  $(".shareBar").addClass("showIt");
  $(".button-bar").addClass("hideIt");

}


function iconArt() {

  var gradient = context.createRadialGradient(5, 5, 0, 0, 0, CANVAS_DATA.dimensions.w/3);

  for(i = 0; i < traceLocations.length; i++) {

    blendMode(MULTIPLY);
    noStroke();
    gradient.addColorStop(0, traceLocations[i].color);
    gradient.addColorStop(1, "#ffffff");
    context.fillStyle = gradient;
    context.shadowBlur = 200;
    context.shadowColor = traceLocations[i].color;
    ellipse(traceLocations[i].x, traceLocations[i].y, 100);
  }
}
