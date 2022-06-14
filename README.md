# fpftech-projetofinal
fpftech-projetofinal

Boa Tarde Emanuel, Conforme acordado na entrevista, segue abaixo os testes e instruções. Intuito do teste: Mapear o estágio de evolução dos futuros techers, pontos fortes e de melhoria. Instruções: · O candidato terá até as 23:59 do dia 14/06/2022 para devolver o e-mail com a solução; · Importante que seja enviado o código mesmo que não tenha dado tempo de concluir, a avaliação será feita com base do que foi construído; · Serão levados em consideração: o Histórico de commits para checar como foi gerenciado o versionamento do projeto; o Boas práticas; o Qualidade de código; o Abordagens, tecnologias e frameworks utilizados; o Se o candidato focou no MVP (Produto viável mínimo), ou pensou de forma mais ampla no projeto; Temos abaixo, um teste em formato de desafio. Faça o máximo que puder de cada um deles, tente utilizar todo seu conhecimento na solução. Aconselhamos a focar na qualidade, pois avaliaremos com base no que foi codificado por você. Boa Sorte!??

TESTE 01

Crie um crud para inserção de Clientes, Produtos e Vendas (um Frontend Web no formato Single Page Application) e um backend para o site
Desenvolva um webservice REST API para as 3 rotas abaixo: /produtos /vendas /clientes Por exemplo, se quisermos detalhes do produto cujo id é 215, o path utilizando GET deve ser /produtos?id=215 , e o retorno sendo formato json.
Faça um mini dashboard mostrando os dados de vendas.
Publique o resultado do seu código no GITLAB e envie o link do repositório para a avaliação. Extra: Criar imagens docker (uma para o frontend e outra para o backend) e utilizar uma imagem de banco de dados já existente. Nota 1: No arquivo leia-me do projeto, adicione todas as tecnologias e etapas de desenvolvimento que você gostaria de colocar se ele fosse maior e com uma equipe grande. Nota 2: Também no arquivo leia-me do projeto, colocar o passo a passo sobre de instalação da aplicação.
iniciar o projeto
npm init

instalar dependecias
npm install cors dotenv express mysql2 path sequelize sequelize-cli swagger-ui-express

instalar dependecias desenvolvedor
npm install swagger-autogen --dev

criar migrations
npx sequelize-cli migration:generate --name Create-Produtos npx sequelize-cli migration:generate --name Create-Vendas npx sequelize-cli migration:generate --name Create-Clientes

# criar database
npx sequelize-cli db:create

# gerar migrations na database
npx sequelize-cli db:migrate

# executar aplicacao
npm start

# criar documentacao swagger
node swagger.js

# clonar projeto
git clone git@github.com:emanueleborges/fpftech-projetofinal.git

# instalar pacotes
npm install

# criar database
npx sequelize-cli db:create

# gerar migrations na database
npx sequelize-cli db:migrate

# executar aplicacao
npm start

# instalar angular cli
npm install -g @angular/cli

# executar angular cli
ng serve

# instalar Frontend no Heroku
- Criar Arquivos na pasta Frontend   
Procfile
------------------------------------------
web: node server
------------------------------------------
server.js
------------------------------------------

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/frontend'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend/'}),
);
app.listen(process.env.PORT || 8080);
------------------------------------------
npm install express

# instalar Backend no Heroku
- Selecionar pasta Frontend aonde esta o index.js ou server.js   
- package.json
"scripts": {
    "start": "node index.js ",    
    ou  
"scripts": {
    "start": "node ./api/index.js ",