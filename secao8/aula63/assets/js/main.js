// AJAX
// Asynchronous Javascript and XML
// com callback
// const request = obj => {
//   const xhr = new XMLHttpRequest()
//   // xhr.open(method, url, eh_sicrono)
//   xhr.open(obj.method, obj.url, true)
//   xhr.send()

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.sucess(xhr.responseText)
//     } else {
//       obj.error({
//         code: xhr.status,
//         msg: xhr.statusText
//       })
//     }
//   })
// }

// function loadPage (element) {
//   const href = element.getAttribute('href')
//   request({
//     method: 'GET',
//     url: href,
//     sucess (response) {
//       const result = document.querySelector('.resultado')
//       result.innerHTML = response
//     },
//     error (errorResponse) {
//       console.log(`Code:${errorResponse.code}\nMessage:${errorResponse.msg}`)
//     }
//   })
// }

// document.addEventListener('click', (e) => {
//   const el = e.target
//   const tag = el.tagName.toLowerCase()

//   if (tag === 'a') {
//     e.preventDefault()
//     loadPage(el)
//   }
// })

// com promise
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

// function loadPage (element) {
//   const href = element.getAttribute('href')
//   const objConfig = {
//     method: 'GET',
//     url: href
//   }
//   request(objConfig)
//     .then(response => {
//       const result = document.querySelector('.resultado')
//       result.innerHTML = response
//     })
//     .catch(error => console.log(error))
// }

// document.addEventListener('click', (e) => {
//   const el = e.target
//   const tag = el.tagName.toLowerCase()

//   if (tag === 'a') {
//     e.preventDefault()
//     loadPage(el)
//   }
// })

// com promise e async
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    // xhr.open(method, url, eh_sicrono)
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    })
  })
}

async function loadPage (element) {
  const href = element.getAttribute('href')
  const objConfig = {
    method: 'GET',
    url: href
  }
  try {
    const response = await request(objConfig)
    const result = document.querySelector('.resultado')
    result.innerHTML = response
  } catch (error) {
    console.log(error)
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