const request = require('supertest');
const app = require('../router/email');

describe('GET /', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })

    it('returns a Json list of emails', (done) => {
        // request(app)
        //     .get('/')
        //     .expect(200, done)
    })
})