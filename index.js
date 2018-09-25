const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const emailRoute = require('./router/email')
const logger = require('morgan');
const readFileFunc = require('./middleware/readFileFunc');
const errorhandling = require('./middleware/errorHandling');

//console.log(area(4))

app.use(logger('dev'))

function clientErrorHandler(err, req, res, next) {
    console.log(req.xhr)
    if (req.xhr) {
        res.status(500).send({ error: "something went wrong" })
    } else {
        next(err)
    }
}

// function logErrors(err, req, res, next) {
//     console.error(err.stack)
//     next(err)
// }

app.use(clientErrorHandler);
//app.use(errorhandling.logErrors)

app.get('/', function (req, res) {
    res.send('Working')
})

app.use('/filepath', readFileFunc.readFileFunction)

//app.use('/email', emailRoute)
module.exports = app;




const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))