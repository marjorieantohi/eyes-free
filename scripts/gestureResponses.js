// javascript for gesture responses

//function 


// We have to include this to make sure that the content has loaded!
document.addEventListener('DOMContentLoaded', function() {

  // Get a reference to an element
  var square = document.querySelector('.square');

  // Create a manager to manage the element
  var manager = new Hammer.Manager(square);

  // Create recognizers
  var Like = new Hammer.Swipe({
    event: 'like',
    direction: Hammer.DIRECTION_UP
  });
  var Heart = new Hammer.Tap({
    event: 'heart',
    taps: 2
  });
  var Wow = new Hammer.Press({
    event: 'wow'
  });
  var Haha = new Hammer.Tap({
    event: 'haha',
    taps: 3
  });
  var Sad = new Hammer.Swipe({
    event: 'sad',
    direction: Hammer.DIRECTION_DOWN
  });
  var Angry = new Hammer.Pan({
    event: 'angry',
    direction: Hammer.DIRECTION_HORIZONTAL
  });

  // Add recognizers to the manager
  manager.add([Like, Heart, Wow, Haha, Sad, Angry]);

  // register as 'heart' only if 'haha' fails
  manager.get('haha').recognizeWith('heart');
  manager.get('heart').requireFailure('haha');

  // trigger the manager for an event
  manager.on('like heart wow haha sad angry', function(e) {
    console.log(e.type);

    // vibrate as confirmation
    navigator.vibrate(500);
    console.log('vibrate done')

    // display result
    var result = document.querySelector('.p');
    setTimeout(function(){ result.innerHTML = e.type;}, 500);

  });


}, false);