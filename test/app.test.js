const request = require('supertest');
const app = require('../index');

describe('GET Endpoints', function () {
  it('should return welcome message at root', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ response: "Congratulation on Your First deployment" }, done);
  });

  it('should return Hello World on /hello', function (done) {
    request(app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ response: "Hello World" }, done);
  });

  it('should return readiness message on /ready', function (done) {
    request(app)
      .get('/ready')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ response: " Great!, It works!" }, done);
  });
});
