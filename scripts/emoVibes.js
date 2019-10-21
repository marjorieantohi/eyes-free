// These are the vibration patterns that should have an emotional correspondence
// to the emojis that they represent. These are subjective.

function emotionalAngryEmoji() {
  navigator.vibrate([500, 100, 500, 100, 500, 100, 500]);
}

function emotionalSadEmoji() {
  navigator.vibrate([500, 500, 500]);
}

function emotionalHeartEmoji() {
  navigator.vibrate([50, 50, 100, 100, 50, 50, 100, 100, 50, 50, 100, 100]);
}

function emotionalLikeEmoji() {
  navigator.vibrate(250);
}

function emotionalHahaEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250]);
}

function emotionalWowEmoji() {
  navigator.vibrate(1000);
}