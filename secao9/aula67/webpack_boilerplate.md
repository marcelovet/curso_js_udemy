# iniciando o projeto
npm init -y
# instalando o babel e webpack
npm i --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli
npm i regenerator-runtime core-js
# arquivo de configuracao
criar webpack.config.js (copiar o boilerplate)
# criar o script em package.json
"loadWebpack": "webpack -w"
# rodar
npm run loadWebpack