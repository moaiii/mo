// onload = function() {
//
//   var canvas = $('#p5canvas');
//
//   document.getElementById('p5canvas').addEventListener('mousedown', mousedown);
//   document.getElementById('p5canvas').addEventListener('mouseup', mouseup);
//
//   function mousedown(event) {
//     //reset drag coordinates
//     dragClick = {};
//     // get relative offset on the canvas
//     dragClick.downX = event.clientX - canvas.position().left;
//     dragClick.downY = event.clientY - canvas.position().top;
//
//     if(drumGroup.length > 0) {
//       dragTarget = findDrum(dragClick.downX, dragClick.downY);
//     }
//   }
//
//   function mouseup(event) {
//     // new position of the sprite
//     canvasTopLeft.left = canvas.position().left;
//     canvasTopLeft.top = canvas.position().top;
//     dragClick.upX = event.clientX - canvasTopLeft.left;
//     dragClick.upY = event.clientY - canvasTopLeft.top;
//     // set them to the dragTarget
//     if(dragTarget) {
//       dragTarget.position.x = dragClick.upX;
//       dragTarget.position.y = dragClick.upY;
//     }
//   }
//
//
//   // look for the drum asset in the array
//   function findDrum(x, y) {
//     for(var i = 0; i < drumGroup.length; i ++) {
//
//       var delta = 30; // margin for click error
//       var posX = drumGroup[i].position.x;
//       var posY = drumGroup[i].position.y;
//
//       var x_1 = posX + delta;
//       var x_2 = posX - delta;
//       var y_1 = posY + delta;
//       var y_2 = posY - delta;
//
//       if(x > x_2 && x < x_1 && y < y_1 && y > y_2) {
//         return drumGroup[i];
//       }
//
//       // no match has been found on the canvas
//       if(i+1 == drumGroup.length) {
//         return null;
//       }
//     }
//   }
// }
