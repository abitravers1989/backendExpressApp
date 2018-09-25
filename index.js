const { area, perimeter } = require('./middleware/exampleSquare');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const emailRoute = require('./router/email')
const logger = require('morgan');
const readFileFunc = require('./middleware/readFileFunc')

//console.log(area(4))

app.use(logger('dev'))

app.get('/', function (req, res) {
    res.send('Working')
})

app.use('/filepath', readFileFunc.readFileFunction('hello.md'))

//app.use('/email', emailRoute)
module.exports = app;




const printPort = (portNumber) => { console.log(`listening on port ${portNumber}`) }
const port = 3000
app.listen(port, printPort(port))