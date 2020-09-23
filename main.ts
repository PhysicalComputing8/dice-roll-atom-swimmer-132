let roll = 0
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    showpips(roll)
})
// woah!! using functions. Very impressive.  AND you are passing an argument to your function.
// 
// This is great stuff. 
// 
// I also like the way you designed the pips on your die face.
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
        // Instead of nesting the if/then statements inside of each other, it would be better as a single if/then/else with multiple else branches. Since you are using the EQUALS comparison, you know that only ONE of your branches can possibly be true, so you can just have a series of checks on the value.
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
