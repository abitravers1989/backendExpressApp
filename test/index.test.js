const request = require('supertest');
const app = require('../index.js');

describe('GET /', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200, done)
    })
})