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
