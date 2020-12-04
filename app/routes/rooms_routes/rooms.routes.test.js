const app = require('../../../app');
const request = require('supertest');
describe('GET rooms', () => {
  it('should get a list of rooms', async (done) => {
    await request(app)
        .get('/api/rooms')
        .then((response) => {
          /**
             * length is the number of rooms
             */
          const {length} = response.body;
          expect(length).toBeGreaterThan(0);
          done();
        });
  });

  it('should get the status of 200', async (done) => {
    await request(app)
        .get('/api/rooms')
        .then((response) => {
          const {status} = response;
          expect(status).toBe(200);
          done();
        });
  });
});

describe('POST room', () => {
  it('should add a room', async () => {
    await request(app)
        .post('/api/rooms')
        .send({
          name: 'test room'
        })
        .then((response) => {
          expect(response.status).toBe(201);
        });
  });
});

describe('DELETE room', () => {
  it('should return status code 200', async () => {
    const newRoomId = await request(app)
        .post('/api/rooms')
        .send({
          name: 'test room'
        })
        .then((response) => {
          return response.body.room_ID;
        });

    await request(app)
        .delete('/api/rooms/' + newRoomId)
        .then((response) => {
          expect(response.status).toBe(200);
        });
  });

  it('should return a ID of the deleted room', async () => {
    const newRoomId = await request(app)
        .post('/api/rooms')
        .send({
          name: 'test room'
        })
        .then((response) => {
          return response.body.room_ID;
        });

    await request(app)
        .delete('/api/rooms/' + newRoomId)
        .then((response) => {
          expect(response.body.room_ID).toBeDefined();
        });
  });
});
