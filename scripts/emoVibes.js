// These are the vibration patterns that should have an emotional correspondence
// to the emojis that they represent. These are subjective.

function angryEmoji() {
  navigator.vibrate([500, 100, 500, 100, 500, 100, 500]);
}

function sadEmoji() {
  navigator.vibrate([500, 500, 500]);
}

function loveEmoji() {
  navigator.vibrate([50, 50, 100, 100, 50, 50, 100, 100, 50, 50, 100, 100]);
}

function likeEmoji() {
  navigator.vibrate(250);
}

function hahaEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250]);
}

function wowEmoji() {
  navigator.vibrate(1000);
}