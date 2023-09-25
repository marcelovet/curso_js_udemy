/**
 * switch e case
 */
const data = new Date('1987-04-23')
const diaDaSemana = data.getDay()

// switch (diaDaSemana) {
//   case 0:
//     diaSemanaTexto = 'Domingo'
//     break
//   case 1:
//     diaSemanaTexto = 'Segunda'
//     break
//   case 2:
//     diaSemanaTexto = 'Terca'
//     break
//   case 3:
//     diaSemanaTexto = 'Quarta'
//     break
//   case 4:
//     diaSemanaTexto = 'Quinta'
//     break
//   case 5:
//     diaSemanaTexto = 'Sexta'
//     break
//   case 6:
//     diaSemanaTexto = 'Sabado'
//     break
//   default:
//     diaSemanaTexto = ''
//     break
// }

function getDiaSemana (diaNum) {
  switch (diaNum) {
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda'
    case 2:
      return 'Terca'
    case 3:
      return 'Quarta'
    case 4:
      return 'Quinta'
    case 5:
      return 'Sexta'
    case 6:
      return 'Sabado'
    default:
      return ''
  }
}

console.log(diaDaSemana, getDiaSemana(diaDaSemana))
