// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
// const fs = require('fs').promises
// const path = require('path')
// const { async } = require('regenerator-runtime')

// // fs.readdir(path.resolve(__dirname))
// //   .then(files => console.log(files))
// //   .catch(e => console.log(e))

// async function readDir (rootDir) {
//   rootDir = rootDir || path.resolve(__dirname)
//   const files = await fs.readdir(rootDir)
//   walk(files, rootDir)
// }

// async function walk (files, rootDir) {
//   const sortTotal = files.sort()
  
//   for (let file of sortTotal) {
//     const fileFullPath = path.resolve(rootDir, file)
//     const stats = await fs.stat(fileFullPath)
    
//     if(/\.git/g.test(fileFullPath)) continue
//     if(/node_modules/g.test(fileFullPath)) continue

//     if (stats.isDirectory()) {
//       console.log(fileFullPath)
//       readDir(fileFullPath)
//       continue
//     }

//     console.log(fileFullPath)

//   }
// }

// // readDir('.')

const path = require('path')
const write = require('./assets/js/modules/escrever')
const read = require('./assets/js/modules/ler')
const { async } = require('regenerator-runtime')

const fileName = 'teste.json'
const filePath = path.resolve(
    __dirname,
    'assets', 'misc',
    fileName
)

const pessoas = [
    { nome: 'ze' },
    { nome: 'te' },
    { nome: 're' },
    { nome: 'feasda' },
    { nome: 'ce' },
]

const jsonFile = JSON.stringify(pessoas, '', 2)

write(filePath, jsonFile)

async function readData (path) {
  const data = await read(path)
  getData(data)
}

function getData (data) {
  data = JSON.parse(data)
  data.forEach(val => {
    if (val.nome.length >= 3) console.log(val)
  })
}

// const myData = readData(filePath)
//   .then(dados => {
//     dados = JSON.parse(dados)
//     dados.forEach(val => console.log(val))
//   })
// console.log(myData)

readData(filePath)
