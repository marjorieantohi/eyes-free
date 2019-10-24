// Put in 1 for emojis, 0 for blank
function generateDiv(number) {
  for (var i = 0; i < globalEmojis.length; i++) {
    if (number) {
      createEmojiElement(globalEmojis[i]);
    } else {
      createBlankElement(globalEmojis[i], globalEmojis[i+1]);
      i++;
    }
  }
}

function createEmojiElement(emoji) {
  var elm = '<div class="showEmojisColumn">' +
          '<img onclick="chose(\'' + emoji + '\')" src="images/' + emoji + '.png" alt="'+ emoji + '">' +
          '</div>';
  $(elm).appendTo(".showEmojisRows");
}

function createBlankElement(emoji1, emoji2) {
  var elm = '<div class="gestureSquaresRow">' +
    '<div class="gestureSquaresColumn">' +
      '<img onclick="choseGesture(\''+emoji1+'\')" style="height:33.3vh" src="images/blank.png" alt="'+emoji1+'">' +
    '</div>' +
    '<div class="gestureSquaresColumn">' +
      '<img onclick="choseGesture(\''+emoji2+'\')" style="height:33.3vh" src="images/blank.png" alt="'+emoji2+'">' +
    '</div>' +
  '</div>'
  $(elm).appendTo(".gestureSquares");
}

function start() {
  generateDiv(0);
  generateDiv(1);
  hideAll();
}