const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_auto.json');
const bodyParser = require('body-parser');
const cors = require('cors')

require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();
routes(app);
app.use(cors());
app.use('/',  swaggerUi.serve,  swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`https://localhost:${port}`));

module.exports = app;
/*
    https://imasters.com.br/banco-de-dados/tutorial-de-migrations-com-node-js-e-sequelize
npm i

npx sequelize-cli migration:generate --name Create-Produtos
npx sequelize-cli migration:generate --name Create-Vendas
npx sequelize-cli migration:generate --name Create-Clientes

npx sequelize-cli db:create ou nmp database
npx sequelize-cli db:migrate ou npm migrate

npm install -g @angular/cli
npx ng new frontend [y sass] 
npx ng generate component componentes/lista  -- criacao de componentes e ou servicos 
npx ng generate services services/lista  -- criacao de componentes e ou servicos 
ng serve -- iniciar servidor

https://www.w3jar.com/node-js-login-registration-rest-api-mysql-db/
*/