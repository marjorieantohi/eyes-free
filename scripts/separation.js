// This file has to do with hiding and showing classes.


// Hide a class
function hideClass(className) {
    if (className == 'showEmojis') {
      globalTime = new Date().getTime() - startTime;
    }
    document.getElementsByClassName(className)[0].style.visibility = 'hidden';
}

// Show a class
function showClass(className) {
  if (className == 'showEmojis') {
    startTime = new Date().getTime();
    randomizeEmojis();
  }
  document.getElementsByClassName(className)[0].style.visibility = '';
}

// Hide all the classes except for hideVibration. This is used at the beginning.
function hideAll() {
  hideClass('showEmojis');
  hideClass('beginGesture');
  hideClass('gestureSquares');
  hideClass('exportCsv');
}

// This is to do both at the same time in the html file!
function gestureSpace() {
  hideClass('beginGesture');
  showClass('gestureSquares');
}