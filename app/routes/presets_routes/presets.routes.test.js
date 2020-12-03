const app = require('../../../app');
const request = require('supertest');

describe('GET presets', () => {
  it('should get a list of presets', async (done) => {
    await request(app)
        .get('/api/presets')
        .then((response) => {
          /**
                 * length is the number of presets
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
        .get('/api/presets')
        .then((response) => {
          const {
            status,
          } = response;
          expect(status).toBe(200);
          done();
        });
  });
});
describe('GET preset by id', () => {
  it('should return a preset with particular id', async (done) => {
    const newPreset = await request(app)
        .post('/api/presets/')
        .send({
          airflow,
          uid,
         room,
         zone
        }).then((response) => {
          return response.body;
        });

    await request(app)
        .get('/api/presets/'+newPreset.uid)
        .then((response) => {
          expect(response.body).toEqual(newPreset);
          done();
        });
  });
});

describe('POST presets', () => {
  it('should add a presets', async (done) => {
    await request(app)
        .post('/api/presets')
        console.log(uid)
        .send({
          airflow,
          uid,
          room,
          zone
        })
        .then((response) => {
          expect(response.status).toBe(201);
          done();
        });
  });
});
describe('PUT presets', () => {
  it('should return number of updated records', async () => {
    const newPreset = await request(app)
        .post('/api/presets/')
        .send({
          airflow: 10,
          FK_User: 1,
          FK_Climate_Zone: 1,
        }).then((response) => {
          return response.body;
        });
    const numberOfUpdatedRecords = await request(app)
        .put('/api/presets/'+newPreset.preset_ID)
        .send({
          airflow: 5,
        }).then((response) => {
          return response.body[0];
        });
    expect(numberOfUpdatedRecords).toBe(1);
  });
});
describe('DELETE presets', () => {
  it('should return status code 200', async (done) => {
    const newPresetId = await request(app)
        .post('/api/presets')
        .send({
          airflow: 10,
          FK_User: 1,
          FK_Climate_Zone: 1,
        })
        .then((response) => {
          return response.body.preset_ID;
        });

    await request(app)
        .delete('/api/presets/' + newPresetId)
        .then((response) => {
          expect(response.status).toBe(200);
          done();
        });
  });

  it('should return a ID of the deleted presets', async (done) => {
    const newPresetId = await request(app)
        .post('/api/presets')
        .send({
          airflow: 10,
          FK_User: 1,
          FK_Climate_Zone: 1,
        })
        .then((response) => {
          return response.body.preset_ID;
        });

    await request(app)
        .delete('/api/presets/' + newPresetId)
        .then((response) => {
          expect(response.body.Preset_ID).toBeDefined();
          done();
        });
  });
});
