//const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./router/user');
const logger = require('morgan');
const errorhandling = require('./middleware/errorHandling');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.yaml');
const swaggerTool = require('swagger-tools');


app.use(logger('dev'));
app.use(errorhandling.clientErrorHandler);
app.use(errorhandling.logErrors);

app.get('/health', function (req, res) {
    res.send('Working')
    //where is the 'Working' in the response?
    //console.log(res);
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//sort end point: https://stackoverflow.com/questions/32883626/typeerror-app-use-requires-middleware-functions

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api', userRoute)

module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))
