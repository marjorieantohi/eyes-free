function hideClass(className) {
    if (className == 'showEmojis') {
      globalTime = new Date().getTime() - startTime;
    }
    document.getElementsByClassName(className)[0].style.visibility = 'hidden';
}

function showClass(className) {
  if (className == 'showEmojis') {
    startTime = new Date().getTime();
    randomizeEmojis();
  }
  document.getElementsByClassName(className)[0].style.visibility = '';
}

function hideAll() {
  hideClass('showEmojis');
  hideClass('beginGesture');
  hideClass('gestureSquares');
  hideClass('exportCsv');
}

function gestureSpace() {
  hideClass('beginGesture');
  showClass('gestureSquares');
}