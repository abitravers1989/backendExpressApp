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
    const validEmail = { "email": "test@test.com" }
    it('returns 200 when a valid email is POSTED to the endpoint', (done) => {
        request(app)
            .post('/email')
            .send(validEmail)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })

    it('returns 400 with not created if an in-valid email is POSTED to the endpoint', (done) => {
        request(app)
            .post('/email')
            .send("nothing")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('valid email not provided')
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })
})