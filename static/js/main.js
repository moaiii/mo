

/**
 * Mobile Strings
 */



/**
 * Button Clicks
 */
 $(document).ready(function(){

   // intro animation
  //  introVideo.onended = function() {
     setTimeout(function(){
       $("#drum").css("display", "none");
       $(".button-bar").css("display", "flex");
       $('#buttonContainer_right').addClass("hideIt");

       var beginButton = $('#buttonContainer_left')
          beginButton.children().first().html('BEGIN');
     }, 3000);
  //  }


   // listeners - left cassette button
   $('#buttonContainer_left').click(function() {
     buttonstate(this, this.children[0].innerHTML);
   });
   $( "#buttonContainer_left" )
  .mouseup(function() {
    $( this.children[1] ).attr('src', 'images/buttons/CTA_desktop_idle_x2.png');
  })
  .mousedown(function() {
    $( this.children[1] ).attr('src', 'images/buttons/CTA_desktop_active_x2.png');
  });

  // listeners - right cassette button
   $('#buttonContainer_right').click(function() {
     buttonstate(this, this.children[0].innerHTML);
   });
   $( "#buttonContainer_right" )
  .mouseup(function() {
    $( this.children[1] ).attr('src', 'images/buttons/CTA_desktop_idle_x2.png');
  })
  .mousedown(function() {
    $( this.children[1] ).attr('src', 'images/buttons/CTA_desktop_active_x2.png');
  });


   $('#startover').click(function() {
     buttonstate(this, this.children[0]);
   });

   $('#download').click(function() {
     buttonstate(this.children[0]);
   });


   $('#menuToggle').click(function() {
     if(menuClosed) { //is closed
       this.children[0].src = "images/svg/menu_open.svg";
       $(".splashMenu").removeClass("visible");
       menuClosed = false;
     } else {
       this.children[0].src = "images/svg/menu_close.svg";
       $(".splashMenu").addClass("visible");
       menuClosed = true;
     }
   });

   $('#volumeToggle').click(function() {
     if(hasVolume) {
       this.children[0].src = "images/svg/volume_off.svg";
       hasVolume = false; // turn audio off
       masterVolume(0);
     } else {
       this.children[0].src = "images/svg/volume_on.svg";
       hasVolume = true; //turn audio on
       masterVolume(1);
     }
   });




   function buttonstate(container, btn) {

     console.log(container);

     switch(btn){
       case "+ ADD A DRUM":
        // allow pinball button after 3 drums
        if(drumCounter > 2) {
          $('#buttonContainer_right').removeClass("hideIt");
        }
        createDrum();
        break;

      case "&#9658 PLAY":
        launchPinball();
        container.children[0].innerHTML = "&#9208 PAUSE";
        console.log(container.children[0].innerHTML );
        break;

      case "&#9208 PAUSE":
        console.log("pause");
        container.children[0].innerHTML = "RESUME";
        break;

      case "&#9658 RESUME":
        console.log("resume");
        container.children[0].innerHTML = "PAUSE";
        break;

      case "share":
        console.log("share");
        break;

      case "BEGIN":
       container.children[0].innerHTML = "+ ADD A DRUM";
        break;

      case "START OVER":
        document.location.reload(true);
        break;

      case "DOWNLOAD":
        window.open('https://play.google.com/store/music/album/M%C3%98_Drum?id=Bcuejfascl46t2r4jq2njcwcwxq');
        break;
     }
   }

   function swapIcon(image, newSource) {
     var img = image.children[1].src;
     var oldImage = img;
     img = newSource;
     setTimeout(function(){
      img = oldImage;
     }, 100);
   }

 })


function showInstructions() {
  menuVisible = false;
  console.log('instructions');
}

function instructionMenu(){
  //close main menu
  console.log($("#menuToggle"));
  $("#menuToggle").children[0].src = "images/svg/menu_close.svg";
  $(".splashMenu").removeClass("visible");
  menuClosed = true;

  $("#instructMenu").addClass("opaque");

}

$("#howtoplay").click(function(){
  instructionMenu();
})
