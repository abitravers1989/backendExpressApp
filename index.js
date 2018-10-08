//const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./router/user');
const logger = require('morgan');
const errorhandling = require('./middleware/errorHandling');
const fs = require('fs');

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

app.use('/api', userRoute)


//setup log

const printOutPutLog = () => {
    console.log("logging stream on")
}

const closedLog = () => {
    console.log("closed logging stream")
}

var accessLogStream = fs.createWriteStream('log.txt', { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream }))

accessLogStream.on('open', printOutPutLog)
accessLogStream.on('close', closedLog)



//database connection

//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


const Database = require('./database');
const mongoose = require('mongoose');
const mongoDB = new Database("mongodb://localhost:27017", mongoose);
mongoDB.connectAndSetUpListners();


//swagger

//const swaggerTool = require('swagger-tools');
//const swaggerObject = require('./swagger.yaml');
//what is swaggerMetadata?

// swaggerTool.initializeMiddleware(swaggerObject, function (middleware) {
//     app.use(middleware.swaggerMetadata());
//     // Validate Swagger requests
//     app.use(middleware.swaggerValidator({
//         validateResponse: true
//     }));
// })

// const spec = require('swagger-tools').specs.v2; 

//spec.composeModel(user)

module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))