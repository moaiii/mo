
function drawAudioSpectrum(color, size, thickness, bounce) {

  /**
   *  Variables
   */
  radius = size;

  /**
   *  Higher values = more rigidity
   */
  smoothing = bounce;

  /**
   *  Change to overall shape pattern of the spectrum
   */
  //  morph = slider_morph.value();

  /**
   *  Set line styles
   */
  noFill();

  beginShape();

  stroke(color);

  strokeWeight(thickness);

  /**
   *  Loop through waveform audio buckets
   */
  for (var i = 0; i < 360; i++){

    /**
     *  Get dynamic length of each bucket
     */
    var wave = map( waveform[i * morph] / smoothing, -1, 1, 0, 150 );

    /**
     *  Create simple circular coordinate system
     */
    var x1 = radius * Math.sin(i * morph) + width / 2;
    var y1 = radius * Math.cos(i * morph) + height / 2;

    /**
     *  Pitch dynamic length by its angle on the circular coordinate system
     */
    x_wave = wave * Math.sin(i);
    y_wave = wave * Math.cos(i);

    /**
     *  Get new angled co-ordinate
     */
    var x2 = x1 + x_wave;
    var y2 = y1 + y_wave;

    /**
     *  Draw audio graph to canvas
     */
    curveVertex(x2, y2);
  }

  endShape();
}
