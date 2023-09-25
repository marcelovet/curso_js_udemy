// FETCH API e AXIOS
// fetch('pessoas.json')
//   .then(resposta => {
//     if (resposta.status !== 200) throw new Error(`Erro ${resposta.status}`)
//     return resposta.json()
//   })
//   .then(json => {
//     createTable(json)
//   })

axios('pessoas.json')
  .then(resposta => {
    if (resposta.status !== 200) throw new Error(`Erro ${resposta.status}`)
    createTable(resposta.data)
  })

function createTable (data) {
  const tableContainer = document.querySelector('.table-container')
  const table = document.createElement('table')
  tableContainer.appendChild(table)

  createTableHeader(table, Object.keys(data[0]))
  createTableData(table, data)
}

function createTableHeader (table, names) {
  const tr = document.createElement('tr')
  table.appendChild(tr)

  for (const header of names) {
    const th = document.createElement('th')
    th.innerText = header.toUpperCase()
    tr.appendChild(th)
  }
}

function createTableData (table, data) {
  for (const row of data) {
    const tr = document.createElement('tr')
    table.appendChild(tr)

    for (const value in row) {
      const td = document.createElement('td')
      td.innerText = row[value]
      tr.appendChild(td)
    }
  }
}
