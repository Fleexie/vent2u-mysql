const request = require('supertest');
const app = require('./app');

describe('user route', () => {
  it('should get a user', async (done) => {
    await request(app)
      .get('/')
      .then((response) => {
        const {
          message
        } = response.body;
        expect(message).toEqual("Vent2U Group Anina, Mathias and Jannick");
        done();
      });
  });
})