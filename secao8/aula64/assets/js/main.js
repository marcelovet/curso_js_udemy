// FETCH API
// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     // xhr.open(method, url, eh_sicrono)
//     xhr.open(obj.method, obj.url, true)
//     xhr.send()

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText)
//       } else {
//         reject(xhr.statusText)
//       }
//     })
//   })
// }

async function loadPage (element) {
  const href = element.getAttribute('href')

  // fetch(href)
  //   .then(response => response.text())
  //   .then(html => {
  //     const result = document.querySelector('.resultado')
  //     result.innerHTML = html
  //   })
  //   .catch(e => console.error(e))

  try {
    const response = await fetch(href)

    if (response.status !== 200) throw new Error(`ERRO: ${response.status}`)

    const html = await response.text()
    const result = document.querySelector('.resultado')
    result.innerHTML = html
  } catch (error) {
    console.error(error)
  }
}

document.addEventListener('click', (e) => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    loadPage(el)
  }
})
