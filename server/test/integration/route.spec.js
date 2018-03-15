const expect = require('chai').expect;
const app = require('./../../app');
const request = require('supertest')(app);

describe('Integration - main', () => {
  it('teste the requerst', (done) => {
    request
      .get('/teste')
      .end((err, res) => {
        expect(1).to.be.equal(1);
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.content).to.be.equal('teste');
        done();
      });
  });
})
