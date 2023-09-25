function getTimeFromSeconds (seconds) {
  const dateObject = new Date(seconds * 1000)
  return dateObject.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}

let seconds = 0
let timer
const relogio = document.querySelector('.relogio')

function initTimer () {
  timer = setInterval(function () {
    seconds++
    relogio.innerHTML = getTimeFromSeconds(seconds)
  }, 1000)
}

function clock () {
  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('iniciar')) {
      initTimer()
      relogio.classList.remove('pausado')
    }

    if (el.classList.contains('pausar')) {
      clearTimeout(timer)
      relogio.classList.add('pausado')
    }

    if (el.classList.contains('zerar')) {
      seconds = 0
      relogio.innerHTML = getTimeFromSeconds(seconds)
    }
  })
}

clock()

// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
// iniciar.addEventListener('click', function (e) {
//   initTimer()
//   relogio.classList.remove('pausado')
// })
// pausar.addEventListener('click', function (e) {
//   clearTimeout(timer)
//   relogio.classList.add('pausado')
// })
// zerar.addEventListener('click', function (e) {
//   seconds = 0
//   relogio.innerHTML = getTimeFromSeconds(seconds)
// })
