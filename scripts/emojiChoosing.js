// This file has to do with participants' choices.

// This function notes down what the user has responded to "which emoji did you choose?"
function chose(emoji) {
  globalEmojiChosen = emoji;
  addRowContainer();
}

// This function notes down what emoji the user sent in the numbered test
function choseGesture(emoji) {
  likeEmoji();
  globalEmojiShown = emoji;
  hideClass('gestureSquares');
  setTimeout(showClass,250, 'showEmojis');
}

function choseEmoGesture(emoji) {
  likeEmoji();
  globalEmojiShown = emoji;
  hideClass('gestureBoard');
  setTimeout(showClass,250, 'showEmojis');
}