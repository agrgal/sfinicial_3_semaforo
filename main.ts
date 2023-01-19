function apagado () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
}
led.enable(false)
basic.forever(function () {
    apagado()
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    apagado()
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(200)
    apagado()
    pins.digitalWritePin(DigitalPin.P4, 1)
    basic.pause(200)
})
