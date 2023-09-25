# iniciando o projeto
npm init -y
# instalando o babel
npm install --save-dev @babel/cli @babel/core @babel/preset-env
# solicitando a conversao no babel
npx babel main.js -o bundle.js --presets=@babel/env

