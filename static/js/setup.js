

/**
 *  Initialise the project
 */
function setup() {

  setupCanvas();
   // rename canvas in DOM

  CANVAS_DATA = canvasSetup();

  // sprayboard = createCanvas(canvasWidth, canvasHeight);
  // sprayboard.parent('sprayboard');

  // buttonState("init");

  // change angles to degrees
  angleMode(DEGREES);

  colorMode(HSL);



  // now audio loaded, get duration
  for( i = 0; i < 24; i++ ) {
    drums[i].duration = drums[i].sound.duration();
  }
}


function setupCanvas() {
  var size = getCanvasSize(window.innerWidth, window.innerHeight);

  domCanvas = createCanvas(size.w, size.h);
  domCanvas.parent('canvasContainer');
  $('#defaultCanvas0').attr('id','p5canvas');

  window.addEventListener('resize', onResizeHandler);
  onResizeHandler();
}


function onResizeHandler() {
  CANVAS_DATA = canvasSetup();

  var w = window.innerWidth;
  w = (w < 680) ? w : 680;

  console.log("Width: ", w);

  resizeCanvas(w, w);
}

/**
 *  Grid and Canvas Logic
 */

function canvasSetup() {

  var height = window.innerHeight;
  var width = window.innerWidth;

  console.log(width, height);
  // debugger;
  var decreasing = windowIsDecreasing(width, height);
  var canvasSize = getCanvasSize(width, height);
  var aspectRatio = getAspectReduction(canvasSize);
  var gridPoints = gridDraw(aspectRatio, canvasSize);
  var sizeDifference = resizeAmount(canvasSize);
  var assetConfiguration = repositionAssets(aspectRatio, canvasSize, decreasing);
  var context = getContext();

  canvasPack = {
    dimensions: canvasSize,
    aspect: aspectRatio,
    grid: gridPoints,
    context: context,
    difference: sizeDifference,
    size: 36
  };

  console.log(canvasPack);
  return canvasPack;
}


function resizeAmount(size) {

  return 680 - size.w;

}


function getContext(){

  canvas = document.getElementById('p5canvas');
  context = canvas.getContext('2d');
  context.id = "main canvas";

  return context;
}


function windowIsDecreasing(width) {

  if (width < LAST_WIDTH) {
    lastWidth == width;
    return true; //decreasing
  } else if (width > LAST_WIDTH) {
    lastWidth == width;
    return false;
  }
}


 function getCanvasSize(width, height) {

   var size = {};

   if ( width > 680 ) {

     size = {
       w: 680,
       h: 680,
       small: false
     };

   } else if ( width < 680 ) {

     size = {
       w: width,
       h: width,
       small: true
     };

     console.log(size);

   }

   return size;
 }


 function getAspectReduction(size) {

   if(size.small){

     return size.w / 680;

   } else {

     return 1;
   }
 }


function gridDraw (aspect, size) {

  var gridPoints = [];

  // grid reset
  gridPoints.splice(0, gridPoints.length);

  // get lengths
  segment = size.h / 6;
  console.log("segment: " + segment);
  half_segment = segment / 2;
  console.log("half seg: " + half_segment);

  // loop canvas and draw grid
  for (r = 0; r < 6; r++) {
    for(c = 0; c < 6; c++) {

      coordinates = {
        id: "c" + c + "_" + "r" +r,
        x: ( ( c * segment ) + half_segment ),
        y: ( ( r * segment ) + half_segment )
      };

      gridPoints.push(coordinates); // push coordinate objects to array
    }
  }
  console.log(gridPoints);
  // console.log(domCanvas);
  return gridPoints;
}


function repositionAssets(aspect, size, decreasing) {

  for(i = 0; i < drumGroup.length; i++){

    if(size.small && drumGroup.length > 0) {
      // change image to small
      drumGroup[i].addImage(drumGroup[i].icon.image_whiteSmall);
    } else {
      drumGroup[i].addImage(drumGroup[i].icon.image_whiteLarge);
    }

    // re-adjust coordinates
    if(decreasing){ // move coordinates
      drumGroup[i].position.x *= aspect;
      drumGroup[i].position.y *= aspect;
    } else { //increasing move
      drumGroup[i].position.x *= ( 1 / aspect );
      drumGroup[i].position.y *= ( 1 / aspect );
    }

  }
}
