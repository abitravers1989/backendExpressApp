const fs = require('fs');
const filePath = 'hello.md';

module.exports = {
    // readFileFunction: (filePathName) => {
    readFileFunction: function (req, res, next, filePathName) {
        fs.readFile(filePathName, (error, data) => {
            if (error) {
                next(error)
            } else {
                res.send(data.toString())
            }
        })
    }
}

//}