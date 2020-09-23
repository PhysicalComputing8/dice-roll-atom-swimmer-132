input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    basic.showNumber(roll)
})
let roll = 0
basic.showString("Shake to roll the dice")
