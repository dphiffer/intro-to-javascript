// This first line ensures the document has loaded enough content where it's
// safe to start meddling with things
window.addEvent('domready', function() {
  
  // How wide each image is
  var width = 991;
  
  // Current position of the slide show
  var n = 0;
  
  // Number of total slides
  var count = $$('#slides img').length;
  
  // Dynamically resize the inner DIV element
  $('inner').setStyle('width', width * count);
  
  // On click, advance to the next slide
  $('slides').addEvent('click', function() {
    
    // Increment the position by one
    // The modulo operator (%) resets n back to 0 if it exceeds count
    n = (n + 1) % count;
    
    // Slide the view to the correct position
    $('inner').tween('left', n * -width);
    
  }); // click event

}); // domready event

