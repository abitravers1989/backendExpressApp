const request = require('supertest');
const app = require('../index.js');

//

describe('GET /health', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/health')
            .expect(200, done)
    })

    // it('throws an error if something went wrong', (done) => {
    //     request(app)
    //         .get('/')
    //         .request(app)
    //         .expect(500, done)
    // })
})

describe('POST /email', () => {
    const validEmail = "test@test.com"
    it('returns 200 when a valid email is POSTED to the endpoint', (done) => {
        request(app)
            .post('/email')
            .send(validEmail)
            .expect(200, done)
    })
})