enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("fuk")
})
input.onPinPressed(TouchPin.P2, function () {
    radio.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P2,
    EventBusValue.MES_ALERT_EVT_ALARM1
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("BT SENDING")
    basic.pause(200)
    radio.sendMessage(RadioMessage.message1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no magnet")
    led.setBrightness(input.magneticForce(Dimension.Strength))
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(12)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function () {
    led.plot(1, 4)
    basic.showIcon(IconNames.Silly)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showString("BT CONNECTED?")
})
basic.showString("oof")
