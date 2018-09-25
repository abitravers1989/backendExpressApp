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
