import { estado, actualizarEstado } from "./core/estado.js"
import { iniciarLatido } from "./core/latido.js"
import { iniciarParticulas } from "./core/particulas.js"
import { mensajeInicial } from "./core/memoria.js"
import { evaluarRituales } from "./core/rituales.js"
import "./core/tiempo.js"

document.getElementById("mensaje").innerText = mensajeInicial()

actualizarEstado()
iniciarLatido()
iniciarParticulas()
evaluarRituales()
