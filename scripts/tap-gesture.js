// We have to include this to make sure that the content has loaded!
document.addEventListener('DOMContentLoaded', function() {

  // Get a reference to an element
  var square = document.querySelector('.square');
  console.log(square);

  // Create a manager to manage the element
  var manager = new Hammer.Manager(square);

  // Create a recognizer
  var Tap = new Hammer.Tap({
    taps: 1
  });

  // Add the recognizer to the manager
  manager.add(Tap);

  // Subscribe to the desired event
  manager.on('tap', function(e) {
    e.target.classList.toggle('expand');
    console.log("you tapped");
  });

}, false);