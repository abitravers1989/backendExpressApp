//const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const emailRoute = require('./router/email')
const logger = require('morgan');
const readFileFunc = require('./middleware/readFileFunc');
const errorhandling = require('./middleware/errorHandling');

app.use(logger('dev'));
app.use(errorhandling.clientErrorHandler);

app.get('/health', function (req, res) {
    res.send('Working')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//pass the error to this callback or use two callbacks
app.post('/email', (req, res) => {
    const customerEmail = req.body.email;
    console.log(customerEmail)
    //change this to validation middleware.
    //want to log is email in wrong formatt. 
    if (customerEmail) {
        return res.status(201).json(`created user with ${customerEmail}`)
    } else {
        // console.error(err.stack)
        return res.status(400).send("valid email not provided")
    }


})


// function logErrors(err, req, res, next) {
//     console.error(err.stack)
//     next(err)
// }



//need to get unit tests working
//app.use('/filepath', readFileFunc.readFileFunction)


//sort end point: https://stackoverflow.com/questions/32883626/typeerror-app-use-requires-middleware-functions




app.use('/api', emailRoute)
module.exports = app;

const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))








//not needed yet:

// function clientErrorHandler(err, req, res, next) {
//     console.log(req.xhr)
//     if (req.xhr) {
//         res.status(500).send({ error: "something went wrong" })
//     } else {
//         next(err)
//     }
// }

// function logErrors(err, req, res, next) {
//     console.error(err.stack)
//     next(err)
// }

// app.use(clientErrorHandler);
// //app.use(errorhandling.logErrors)
// app.use(logErrors)