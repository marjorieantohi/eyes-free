function chose(emoji) {
  globalEmojiChosen = emoji;
  addRowContainer();
}

function choseGesture(emoji) {
  likeEmoji();
  globalEmojiShown = emoji;
  hideClass('gestureSquares');
  setTimeout(showClass,250, 'showEmojis');
}

function playRandomPattern() {

  // Hide the button to play a vibration
  hideClass('beginVibration');

  // Used to choose a random pattern
  var randomNumber = getRandomInt(0, 6);

  // Used to calculate when to show emojis
  var timeTillDone;

  // Choose the pattern, note which pattern was played
  switch(randomNumber) {
    case 0:
    likeEmoji();
    globalEmojiShown = "like";
    timeTillDone = 250;
    break;
    case 1:
    loveEmoji();
    globalEmojiShown = "love";
    timeTillDone = 750;
    break;
    case 2:
    hahaEmoji();
    globalEmojiShown = "haha";
    timeTillDone = 1250;
    break;
    case 3:
    wowEmoji();
    globalEmojiShown = "wow";
    timeTillDone = 1750;
    break;
    case 4:
    sadEmoji();
    globalEmojiShown = "sad";
    timeTillDone = 2250;
    break;
    case 5:
    angryEmoji();
    globalEmojiShown = "angry";
    timeTillDone = 2750;
    break;
  }
  setTimeout(showClass,timeTillDone + 250, 'showEmojis');
}