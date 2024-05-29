function iniciarJuego() {
  let botonMascotas = document.getElementById("boton-mascota")
  botonMascotas.addEventListener("click", selectionarMascotaJugador)
}

function selectionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge")
  let inputCapipepo = document.getElementById("capipepo")
  let inputRatigueya = document.getElementById("ratigueya")

  var mascotaJugador = null
  if (inputHipodoge.checked) {
    mascotaJugador = "Hipodoge"
  } else if (inputCapipepo.checked) {
    mascotaJugador = "Capipepo"
  } else if (inputRatigueya.checked) {
    mascotaJugador = "Ratigueya"
  }

  if (mascotaJugador != null) {
    alert("Seleccionaste a " + mascotaJugador)
  } else {
    alert("No has seleccionado a ninguna mascota")
  }
}

window.addEventListener("load", iniciarJuego)