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
input.onButtonPressed(Button.A, function () {
    game.gameOver()
})
function point_counter () {
    if (Math.sqrt(Sum) % 1 == 0) {
        game.addScore(10)
        basic.showNumber(game.score())
    } else {
        findprime(Sum)
        if (findprime(Sum)) {
            game.addScore(1)
            basic.showNumber(game.score())
        } else {
            game.addScore(0)
        }
    }
    if (Sum % 100 == 0) {
        basic.showNumber(game.score())
        game.gameOver()
    }
}
function findprime (Q: number) {
    value = 0
    while (0 <= Q) {
        value += 1
    }
    if (Q % 1 == 0) {
        return true
    } else {
        return false
    }
}
input.onButtonPressed(Button.B, function () {
    if (game.isPaused()) {
        game.resume()
    } else {
        game.pause()
    }
})
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    showpips(roll)
    basic.showIcon(IconNames.Sword)
    findsum()
    basic.showNumber(Sum)
    point_counter()
})
function findsum () {
    Sum += roll
}
let roll = 0
let value = 0
let Sum = 0
game.setScore(0)
Sum = 0
