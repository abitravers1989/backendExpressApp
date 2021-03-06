//const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./router/user');
const logger = require('morgan');
const errorhandling = require('./middleware/errorHandling');
const fs = require('fs');
//need to require this so can use .env variables
//const envs = require('dotenv').config();



app.use(logger('dev'));
app.use(errorhandling.clientErrorHandler);
app.use(errorhandling.logErrors);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

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


//console.log(process.env.USER_NAME)
//console.log(process.env.PASSWORD)
const database = require('./repository/mongo');
const { MongoClient } = require('mongodb');
const mongoConnectionString = `mongodb://${process.env.USER_NAME}:${process.env.PASSWORD}@ds135394.mlab.com:35394/simple-node-backend-app`

app.use(function (req, res, next) {
    //it is undefined at this level
    console.log(database);
    console.log(`database.connect(): ${database.connect(MongoClient, mongoConnectionString)}`)
    req.db = database.connect();
    next();
})


app.listen(3000, function () {
    app.emit('listened', null)
}) 

app.on('listened', function () {
    console.log(`listening on port 3000`)
})

//sort end point: https://stackoverflow.com/questions/32883626/typeerror-app-use-requires-middleware-functions
app.use('/api', userRoute)



module.exports = app;









//https://zellwk.com/blog/crud-express-mongodb/











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


