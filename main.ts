input.onButtonPressed(Button.A, function () {
    radio.sendString("pozik")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("bihotza")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "pozik") {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedString == "triste") {
        basic.showIcon(IconNames.Sad)
    }
    if (receivedString == "bihotza") {
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(1)
