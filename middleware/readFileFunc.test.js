const { expect } = require('chai');
const { v1 } = require('uuid');
const { readFileFunc } = require('./readFileFunc');

describe('readFileFunc', () => {
    describe('readFileFunction', () => {

        it('throws an error if the filePath given is wrong', () => {
            expect(readFileFunc.readFileFunction).to.throw(Error);
        })
    })
})

// module.exports = {
//     readFileFunction: (req, res, next) => {
//         fs.readFile('hello.md', (error, data) => {
//             if (error) {
//                 next(error)
//             } else {
//                 res.send(data.toString())
//             }
//         })
//     }
// }
