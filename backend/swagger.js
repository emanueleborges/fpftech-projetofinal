
// gerador automatico de documentacao 
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_auto.json';
const endpointsFiles = ['./routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles);
