const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const emailRoute = require('./router/email')
const logger = require('morgan');
const fs = require('fs');

//console.log(area(4))

app.use(logger('dev'))

app.get('/', function (req, res) {
    res.send('Working')
})

const readFileFunc = function (req, res, next) {
    fs.readFile('hello.md', (error, data) => {
        if (error) {
            next(error)
        } else {
            res.send(data.toString())
        }
    })
}

app.use('/filepath', readFileFunc)
//app.use('/email', emailRoute)
module.exports = app;




const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))