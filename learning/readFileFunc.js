const fs = require('fs');
module.exports = {
    readFileFunction: function (req, res, next) {
        fs.readFile('hello.md', (error, data) => {
            if (error) {
                next(error)
            } else {
                res.send(data.toString())
            }
        })
    }
}

