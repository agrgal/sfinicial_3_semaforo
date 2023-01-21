function parpadeo (cad: number, tiempo: number) {
    for (let i = 0; i <= Math.round(tiempo * 1000 / cad); i++) {
        pins.digitalWritePin(DigitalPin.P3, i % 2)
        basic.pause(cad)
    }
}
function encender (deColor: string, tempo: number) {
    apagado()
    if (deColor == "verde") {
        for (let j = 0; j <= tempo * 100; j++) {
            basic.pause(10)
            if (pins.digitalReadPin(DigitalPin.P5) == 1) {
                pins.digitalWritePin(DigitalPin.P2, 1)
            } else {
                j = tempo * 100
            }
        }
    } else if (deColor == "amarillo") {
        parpadeo(cadencia, tempo)
    } else if (deColor == "rojo") {
        pins.digitalWritePin(DigitalPin.P4, 1)
        for (let j = 0; j <= tempo * 10; j++) {
            music.ringTone(262)
            basic.pause(100)
            music.rest(music.beat(BeatFraction.Sixteenth))
        }
    }
}
function apagado () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P4, 0)
}
let cadencia = 0
led.enable(false)
let colores = ["verde", "amarillo", "rojo"]
let ts = [10, 4, 12]
let estados = 2
// milisegundos
cadencia = 200
basic.forever(function () {
    for (let i = 0; i <= 2; i++) {
        encender(colores[i], ts[i])
    }
})
