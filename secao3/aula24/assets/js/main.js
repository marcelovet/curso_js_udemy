/**
 * switch e case
 */
const actualDate = new Date()

// function formatDateBr (date) {
//   const weekDayNumber = date.getDay()
//   const monthNumber = date.getMonth()
//   let weekDayString
//   let monthString
//   switch (weekDayNumber) {
//     case 0:
//       weekDayString = 'Domingo'
//       break
//     case 1:
//       weekDayString = 'Segunda-feira'
//       break
//     case 2:
//       weekDayString = 'Terca-feira'
//       break
//     case 3:
//       weekDayString = 'Quarta-feira'
//       break
//     case 4:
//       weekDayString = 'Quinta-feira'
//       break
//     case 5:
//       weekDayString = 'Sexta-feira'
//       break
//     case 6:
//       weekDayString = 'Sabado'
//       break
//     default:
//       weekDayString = ''
//       break
//   }
//   switch (monthNumber) {
//     case 0:
//       monthString = 'Janeiro'
//       break
//     case 1:
//       monthString = 'Fevereiro'
//       break
//     case 2:
//       monthString = 'Marco'
//       break
//     case 3:
//       monthString = 'Abril'
//       break
//     case 4:
//       monthString = 'Maio'
//       break
//     case 5:
//       monthString = 'Junho'
//       break
//     case 6:
//       monthString = 'Julho'
//       break
//     case 7:
//       monthString = 'Agosto'
//       break
//     case 8:
//       monthString = 'Setembro'
//       break
//     case 9:
//       monthString = 'Outubro'
//       break
//     case 10:
//       monthString = 'Novembro'
//       break
//     case 11:
//       monthString = 'Dezembro'
//       break
//     default:
//       monthString = ''
//       break
//   }

//   return `${weekDayString}, ${date.getDate()} de ${monthString} ` +
//     `de ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
// }

const container = document.querySelector('.container')
const h1 = document.createElement('h1')
const p = document.createElement('p')
// p.innerHTML = `${formatDateBr(actualDate)}`
const options = {
  dateStyle: 'full',
  timeStyle: 'short'
}
h1.innerHTML = 'Data atual'
container.appendChild(h1)
container.appendChild(p)
p.innerHTML = actualDate.toLocaleString('pt-BR', options)
