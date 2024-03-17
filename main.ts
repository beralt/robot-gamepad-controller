gamepad.on_button_pressed(gamepad.Button.Green, function () {
    radio.sendString("gaan")
    basic.showIcon(IconNames.Yes)
})
gamepad.on_button_pressed(gamepad.Button.Red, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
})
radio.setGroup(60)
basic.forever(function () {
    if (gamepad.joystick_direction(gamepad.Direction.Forward)) {
        radio.sendString("vooruit")
        basic.showArrow(ArrowNames.North)
    }
    if (gamepad.joystick_direction(gamepad.Direction.Backward)) {
        radio.sendString("achteruit")
        basic.showArrow(ArrowNames.South)
    }
    if (gamepad.joystick_direction(gamepad.Direction.Left)) {
        radio.sendString("links")
        basic.showArrow(ArrowNames.West)
    }
    if (gamepad.joystick_direction(gamepad.Direction.Right)) {
        radio.sendString("rechts")
        basic.showArrow(ArrowNames.East)
    }
})
