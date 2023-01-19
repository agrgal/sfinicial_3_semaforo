function Parpadeo (tempo: number, num: number) {
    for (let index = 0; index < num; index++) {
        apagado()
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(tempo * 1000)
        pins.digitalWritePin(DigitalPin.P3, 0)
        basic.pause(tempo * 1000)
    }
}
function apagado () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
}
led.enable(false)
let ts = 1.1
let cadencia = 0.3
let numero_parpadeos = 4
basic.forever(function () {
    apagado()
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(ts * 1000)
    Parpadeo(cadencia, numero_parpadeos)
    apagado()
    pins.digitalWritePin(DigitalPin.P4, 1)
    basic.pause(ts * 1000)
})
