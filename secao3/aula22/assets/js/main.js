/**
 * date
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
// cria na timestamp atual do pc
let data = new Date()
console.log(data.toString())
// criando a partir do marco zero unix + TZ + milissegundos
const tresHoras = 60 ** 2 * 3 * 1000
data = new Date(tresHoras) // 1970 (marco zero) - 3h (GMT-3) + 3h (tresHoras)
console.log(data.toString())
// fornecendo ano, mes, dia, hora, minuto, segudo
data = new Date(2020, 0, 1, 10, 40, 20) // mes e contado a partir de 0
console.log(data.toString())
// qualquer valor superior ao limite sera jogado para frente
// exemplo 25 horas = dia + 1, 01h
data = new Date(2020, 0, 1, 25, 40, 60) // mes e contado a partir de 0
console.log(data.toString())
// menor composicao possivel: year, month
data = new Date(2020, 0) // mes e contado a partir de 0
console.log(data.toString())
// fornecendo string
data = new Date('2020-01-01')
console.log(data.toString())
data = new Date('2020-01-01 01:30:00')
console.log(data.toString())
data = new Date('2020-01-01T01:30:00')
console.log(data.toString())
data = new Date('2020-01-01T01:30:00.30') // com milissegundos
console.log(data.toString())

// metodos
console.log('Dia', data.getDate())
console.log('Dia da semana', data.getDay()) // dom: 0 | sab: 6
console.log('Mes', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milissegundos', data.getMilliseconds())

function formataData (data) {
  const dia = data.getDate()
  const mes = data.getMonth() + 1
  const ano = data.getFullYear()
  const hor = data.getHours()
  const min = data.getMinutes()
  const seg = data.getSeconds()

  return `${zeroEsquerda(dia)}/${zeroEsquerda(mes)}/${zeroEsquerda(ano)} ` +
  `${zeroEsquerda(hor)}:${zeroEsquerda(min)}:${zeroEsquerda(seg)}`
}

function zeroEsquerda (n) {
  return (n < 10) ? `0${n}` : `${n}`
}

data = new Date()
const dataBr = formataData(data)
console.log(dataBr)

data = new Date('2020-01-01T00:00:00.000+04:00')
console.log(data.toString())
console.log(data.toISOString())

data.setHours(3)
console.log(data.toString())
