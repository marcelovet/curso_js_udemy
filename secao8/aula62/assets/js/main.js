function random (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// solucao mais moderna ==> Promise ==> melhor ainda ==> Async/Await
function esperaAi (msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    // resolve eh a execucao em caso de sucesso no codigo
    // reject em caso de algum erro
    if (typeof msg !== 'string') reject(new TypeError('Bad Value'))
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

// estados de uma promise
// pending: estado inicial, nem cumprido nem rejeitado.
// fulfilled: significa que a operação foi concluída com sucesso.
// rejected: significa que a operação falhou.
async function executa () {
  const max = 3000
  const min = 200

  try {
    const fase1 = await esperaAi('Conexao com o BD', random(min, max))
    console.log(fase1)
    // const fase2 = await esperaAi('Extraindo dados do BD', random(min, max))
    const fase2 = await esperaAi(2, random(min, max))
    console.log(fase2)
    const fase3 = await esperaAi('Tratando os dados', random(min, max))
    console.log('Terminamos na fase 3: ', fase3)
  } catch (e) {
    console.log(e)
  }
}

executa()
