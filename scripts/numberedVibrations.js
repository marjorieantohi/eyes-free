// These vibration patterns will cause the phone to vibrate a certain
// number of times, where the number will be specified by the corresponding
// emoji that the vibrations are meant to communicate, according to the
// following scheme:

/***************
- Like: 1 vibration
- Love: 2 vibrations
- Haha: 3 vibrations
- Wow: 4 vibrations
- Sad: 5 vibrations
- Angry: 6 vibrations
****************/

// We would like the only varying factor between the different emoji
// vibration patterns to be the number of vibrations, so each function
// features the same duration of vibrations and pauses


function likeEmoji() {
    navigator.vibrate(250)
}

function loveEmoji() {
    navigator.vibrate([250, 100, 250])
}

function hahaEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250])
}

function wowEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250, 100, 250])
}

function sadEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250, 100, 250, 100, 250])
}

function angryEmoji() {
    navigator.vibrate([250, 100, 250, 100, 250, 100, 250, 100, 250, 100, 250])
}

