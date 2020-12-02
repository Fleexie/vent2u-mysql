const app = require('../../../app');
const request = require('supertest');

describe('GET seats', () => {
  it('should get a list of seats', async (done) => {
    await request(app)
        .get('/api/seats')
        .then((response) => {
          /**
           * length is the number of seats
           */
          const {
            length,
          } = response.body;
          expect(length).toBeGreaterThan(0);
          done();
        });
  });

  it('should get the status of 200', async (done) => {
    await request(app)
        .get('/api/seats')
        .then((response) => {
          const {
            status,
          } = response;
          expect(status).toBe(200);
          done();
        });
  });
});

describe('GET climate zones by id', () => {
  it('should return status code 200', async (done) => {
    const newClimateZoneId = await request(app)
        .post('/api/seats')
        .send({
          room_ID: 1,
        })
        .then((response) => {
          return response.body.climate_zone_ID;
        });

    await request(app)
        .get('/api/climateZoneById/' + newClimateZoneId)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
  });
});

describe('GET climate zones by room id', () => {
  it(
      'should get list of climate zones with particular room id',
      async (done) => {
        const newRoomId = await request(app)
            .post('/api/rooms')
            .send({
              name: 'test room'
            })
            .then((response) => {
              return response.body.room_ID;
            });

        const newClimateZoneId = await request(app)
            .post('/api/climateZones')
            .send({
              room_ID: newRoomId,
              
            })
            .then((response) => {

              return response.body.climate_zone_ID;
            });
        await request(app)
            .get('/api/climateZoneByRoomId/' + newRoomId)
            .then((response) => {
              expect(response.body[0].climate_zone_ID).toBe(newClimateZoneId);
              done();
            });
      });
});

describe('POST climateZone', () => {
  it('should add a climateZone', async (done) => {
    await request(app)
        .post('/api/seats')
        .send({climate_zone_ID: 1})
        .then((response) => {
          expect(response.status).toBe(201);
          done();
        });
  });

  it('should return 500 missing climate_zone_ID', async (done) => {
    await request(app)
        .post('/api/seats')
        .send({})
        .then((response) => {
          expect(response.status).toBe(500);
          done();
        });
  });
  it('should add a climateZone', async (done) => {
    await request(app)
        .post('/api/seats')
        .send({
          climate_zone_ID: 1,
        })
        .then((response) => {
          expect(response.status).toBe(201);
          done();
        });
  });
});

describe('DELETE seat', () => {
  it('should return status code 200', async (done) => {
    const newRoomId = await request(app)
        .post('/api/rooms')
        .send({name: 'new room'})
        .then((response) => {

          return response.body.room_ID;
        });
    
    const newClimateZoneId = await request(app)
        .post('/api/climateZones')
        .send({room_ID: newRoomId})
        .then((response) => {

          return response.body.climate_zone_ID;
        });

    const newSeatId = await request(app)
        .post('/api/seats')
        .send({climate_zone_ID: newClimateZoneId})
        .then((response) => {
          return response.body.seat_ID;
        });

    await request(app)
        .delete('/api/seats/' + newSeatId)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
  });

  it('should return a ID of the deleted climateZone', async (done) => {
    const newRoomId = await request(app)
        .post('/api/rooms')
        .send({name: 'new room'})
        .then((response) => {
          return response.body.room_ID;
        });
    
    const newClimateZoneId = await request(app)
        .post('/api/climateZones')
        .send({room_ID: newRoomId})
        .then((response) => {
          return response.body.climate_zone_ID;
        });

    const newSeatId = await request(app)
        .post('/api/seats')
        .send({climate_zone_ID: newClimateZoneId})
        .then((response) => {
          return response.body.seat_ID;
        });
    await request(app)
        .delete('/api/seats/' + newSeatId)
        .then((response) => {
          expect(response.body.seat_ID).toBeDefined();
          done();
        });
  });
});
