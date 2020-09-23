let roll = 0
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    showpips(roll)
})
function showpips (number: number) {
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        if (number == 2) {
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . . .
                # # . . .
                # # . . .
                `)
        } else {
            if (number == 3) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . # . .
                    . . . . .
                    # . . . .
                    `)
            } else {
                if (number == 4) {
                    basic.showLeds(`
                        # # . # #
                        # # . # #
                        . . . . .
                        # # . # #
                        # # . # #
                        `)
                } else {
                    if (number == 5) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . # . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        basic.showLeds(`
                            # . # . #
                            # . # . #
                            . . . . .
                            # . # . #
                            # . # . #
                            `)
                    }
                }
            }
        }
    }
}
