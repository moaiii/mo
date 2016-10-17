
/**
 *  Global variables
 */

var moLogo;
var source;
var slider_speed;
var slider_volume;
var hasVolume = true;
var menuClosed = true;

/**
 *  Canvas variables
 */

var aspectRatio = 1;
var canvasHeight;
var canvasWidth;
var canvas;
var CANVAS_DATA;
var context;
var domCanvas;
var edgeDamping = 1;
var i, r, c, x, y; //index for looping
var gridPoints = [];
var gyroX, gyroY;
var headerHeight = 150;
var LAST_WIDTH;
var row, row_offset, column, column_offset;
var traceLocations = [];
var trails = [];
var canvasIsSmall;
var dragClick = {};
var canvasTopLeft = {};

/**
 *  Pinball & Target collision variables
 */

var canPinball = false;
var colors = [

  '#FFF5A3', '#50E4C9', '#FC9C79', '#50E4C9', '#FEF5A4', '#51B6D1', '#197B98',
  '#FDADAE', '#FD94F4', '#FEC29B', '#FB93F2', '#60E9FD', '#8C6EFB', '#197B98',
  '#60E9FD', '#FD9B79', '#FDADAE', '#FD94F4', '#FFF5A3', '#FD9B79', '#FFF5A3',
  '#8B6EFB', '#ffffff', '#ffffff', '#51B6D1'
];
var colorGrowthRate = 0;
var dragTarget;
var drums = [];
var drumCounter = 0;
var drumGroup;
var drumMax = 10;
var drumMin = 3;
var drumHitMax = 2;
var gravity = 0;
var gravityRange = 0.1;
var pinball;
var pinballGroup;
var pinballMax = 1;
var pinballMaxVelocity = 1.5;
var pinballSize = 60;
var pinballImage;
var shadow;
var shadowImage;
var soundIsPlaying = false;
