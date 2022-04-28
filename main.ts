let number = 0
input.onButtonPressed(Button.A, function () {
    number += -1
    basic.showNumber(number)
})
function count (num: number) {
    for (let index = 0; index <= num; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(num - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
}
input.onButtonPressed(Button.AB, function () {
    count(number)
})
input.onButtonPressed(Button.B, function () {
    number += 1
    basic.showNumber(number)
})
