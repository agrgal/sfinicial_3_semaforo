function parpadeo (cad: number, tiempo: number) {
    for (let i = 0; i <= Math.round(tiempo * 1000 / cad); i++) {
        pins.digitalWritePin(DigitalPin.P3, i % 2)
        basic.pause(cad)
    }
}
function encender (deColor: string, tempo: number) {
    apagado()
    if (deColor == "verde") {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(tempo * 1000)
    } else if (deColor == "amarillo") {
        parpadeo(cadencia, tempo)
    } else if (deColor == "rojo") {
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(tempo * 1000)
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
let ts = [3, 2, 2]
let estados = 2
// milisegundos
cadencia = 200
basic.forever(function () {
    for (let i = 0; i <= 2; i++) {
        encender(colores[i], ts[i])
    }
})
