const httpMocks = require('node-mocks-http');
const errorHandling = require('./errorHandling');
const chai = require('chai');
const expect = chai.expect;

//use super test?
//need to come back to this.

describe('ErrorHandling', () => {
    describe('clientErrorHandler', () => {
        it('Responds with 500 status code error', () => {
            const req = httpMocks.createRequest();
            const res = httpMocks.createResponse();
            r
        })
        it('Passes the error to the next function', () => {

        })
    })
})
