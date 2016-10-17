/**
 *  Load assets before canvas is drawn
 */
function preload() {

  // load in
  loadAssets();

  // split assets into groups
  drumGroup = new Group();
  pinballGroup = new Group();

}



function loadAssets() {

  // get pinball images
  pinballImage = loadImage('images/pinball.png');
  shadowImage = loadImage('images/shadow.png');

  // get drums
  var imageFilename, soundFilename;

  for( i = 1; i <= 25; i++ ) {
    var drum = {};
    // load images
    drum.colorSmall_fp = 'images/colour/small/icon-' + (i) + '-c.png';
    drum.colorLarge_fp = 'images/colour/large/icon-' + (i) + '-c.png';
    drum.whiteSmall_fp = 'images/white/small/icon-' + (i) + '-w.png';
    drum.whiteLarge_fp = 'images/white/large/icon-' + (i) + '-w.png';

    drum.image_colorSmall = loadImage(drum.colorSmall_fp);
    drum.image_colorLarge = loadImage(drum.colorLarge_fp);
    drum.image_whiteSmall = loadImage(drum.whiteSmall_fp);
    drum.image_whiteLarge = loadImage(drum.whiteLarge_fp);

    //get hex color values
    drum.color = colors[i-1];

    // load sounds
    drum.soundFilename = 'audio/' + 'stem-' + (i) + '.mp3';
    drum.sound = loadSound(drum.soundFilename);

    // push drum info to array store
    drums.push(drum);
  }
}



function addDrumButtonClick() {
  if(drumCounter < drumMax){
    createDrum();
  } else {
    $(".instructions").css({
      "visibility": "visible !important",
      "width": canvasWidth,
      "height": canvasHeight,
      "left": canvasTopLeft.left,
      "top": canvasTopLeft.top
    });
  }
}
