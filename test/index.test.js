const request = require('supertest');
const app = require('../index.js');

//

describe('GET /health', () => {
    const isValidResponse = function (res) {
        res.body.should.have.property('Working')
    }
    it('returns 200 status code', (done) => {
        request(app)
            .get('/health')
            .expect(200)
            .expect(isValidResponse)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })

    // it('throws an error if something went wrong', (done) => {
    //     request(app)
    //         .get('/health')
    //         .request(app)
    //         .expect(500, done)
    // })
})

describe('GET /api/health', () => {
    it('returns 200 status code', (done) => {
        request(app)
            .get('/api/health')
            .expect(200, done)
    })

    // it('throws an error if something went wrong', (done) => {
    //     request(app)
    //         .get('/api/health')
    //         .request(app)
    //         .expect(500, done)
    // })
})

describe('POST /api/email', () => {
    const validEmail = { "email": "test@test.com" }
    const isValidResponse = function (res) {
        res.should.equal('"created user with test@test.com"')
    }
    it('returns 200 when a valid email is POSTED to the endpoint', (done) => {
        request(app)
            .post('/api/email')
            .send(validEmail)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect(isValidResponse)
            // .expect('"created user with test@test.com"')
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })

    const inValidResponse = "valid email not provided";
    it('returns 400 with not created if an in-valid email is POSTED to the endpoint', (done) => {
        request(app)
            .post('/api//email')
            .send("nothing")
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(400)
            .expect(inValidResponse)
            .end((err) => {
                if (err) return done(err);
                done();
            })
    })
})