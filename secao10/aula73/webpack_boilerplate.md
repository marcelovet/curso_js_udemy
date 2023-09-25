# iniciando o projeto
npm init -y
# instalando o babel e webpack
npm i --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli
npm i regenerator-runtime core-js
# arquivo de configuracao
criar webpack.config.js (copiar o boilerplate)
# criar o script em package.json
"scripts": {
    "loadWebpack": "webpack -w"
  },
# rodar
npm run loadWebpack
# agora extendido com o css

# info geral do npm
para instalar um pacote:
npm install nome_do_pacote -> instala o mais atual com a possibilidade de atualizacoes patch e minor
npm install nome_do_pacote -E -> instala o mais atual exato (sem possibilidade de se atualizar)
npm install nome_do_pacote@major.minor.patch -E -> instala a versao exata (sem possibilidade de se atualizar)
npm install nome_do_pacote@major.x -> instala a versao major especificada em sua ultima versao (sem possibilidade de se atualizar)

para atualizar pacotes (somente funciona que esta marcado com o ^ antes da versao no dependencies)
npm update --save (--save para alterar a versao tambem no package.json)

sistema de versao --> x.y.z (x=major, y=minor, z=patch)
^ - atualiza y e z
~ - atualiza z

para desinstalar
npm uninstall pacote