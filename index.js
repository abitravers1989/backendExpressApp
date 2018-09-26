//const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const emailRoute = require('./router/email')
const logger = require('morgan');
const errorhandling = require('./middleware/errorHandling');

app.use(logger('dev'));
app.use(errorhandling.clientErrorHandler);

app.get('/health', function (req, res) {
    res.send('Working')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//sort end point: https://stackoverflow.com/questions/32883626/typeerror-app-use-requires-middleware-functions

app.use('/api', emailRoute)
module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))








//not needed yet:



// function logErrors(err, req, res, next) {
//     console.error(err.stack)
//     next(err)
// }

// app.use(clientErrorHandler);
// //app.use(errorhandling.logErrors)
// app.use(logErrors)