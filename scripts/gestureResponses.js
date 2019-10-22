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
  })
  var Heart = new Hammer.Tap({
    event: 'heart',
    taps: 2
  });
  var Wow = new Hammer.Press({
    event: 'wow'
  })
  var Haha = new Hammer.Tap({
    event: 'haha',
    taps: 3
  });
  var Sad = new Hammer.Swipe({
    event: 'sad',
    direction: Hammer.DIRECTION_DOWN
  })

  // Add recognizers to the manager
  manager.add([Like, Heart, Wow, Haha, Sad]);

  // register as 'heart' only if 'haha' fails
  manager.get('haha').recognizeWith('heart');
  manager.get('heart').requireFailure('haha');

  manager.on('like heart wow haha sad pressup', function(e) {
    e.target.classList.toggle('expand');
    console.log(e.type);
  });

  // var AngryMan = new Hammer.Manager(square);
  // AngryMan.add(new Hammer.Swip({direction: Hammer.DIRECTION_LEFT}));
  // AngryMan.add(new Hammer.Swip({direction: Hammer.DIRECTION_RIGHT}));
  // AngryMan.add(new Hammer.Swip({direction: Hammer.DIRECTION_LEFT}));

  // AngryMan.on('', function(e) {
  //   console.log(e.type);
  // });

  // var angryRecognizer = new AttrRecognizer()
  // print(angryRecognizer)

}, false);