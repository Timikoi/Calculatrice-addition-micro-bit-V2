let nm1 = 0
let nm2 = 0
input.onButtonPressed(Button.A, function () {
    nm1 += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0 + (nm1 + nm2))
})
input.onButtonPressed(Button.B, function () {
    nm2 += 1
})
