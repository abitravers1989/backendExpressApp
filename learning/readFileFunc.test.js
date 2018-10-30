const chai = require('chai');
const expect = chai.expect;
const readFileFunc = require('./readFileFunc');

//use this to improve the testing:
//https://codeburst.io/unit-testing-in-express-with-promise-based-middleware-and-controllers-7d3d59ae61f8
//need to mock out res and check something is attached to it
describe('readFileFunc', () => {
    console.log("readFileFunc" + readFileFunc)
    console.log("readFileFunc.readFileFunction" + readFileFunc.readFileFunction)
    describe('readFileFunction', () => {
        it('returns the content of the file path to the res object if file is read correctly', () => {

            expect(readFileFunc.readFileFunction).to.deep.equal('working')
        })

        it('throws an error if the filePath given is wrong', () => {
            expect(readFileFunc.readFileFunction).to.throw(Error);
        })
    })
})


