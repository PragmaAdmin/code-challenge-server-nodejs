const request = require('supertest');
const app = require('../src/index');

jest.setTimeout(30000);

describe('Temperature API', () => {
  it('/api/v1/temperature/ -->  get all', () => {
    return request(app).get('/api/v1/temperature').expect('Content-Type', /json/).expect(200);
  })
  it('/api/v1/temperature/{id} -->  get by id', () => {
    return request(app).get('/api/v1/temperature/1').expect('Content-Type', /json/).expect(200);
  })
  it('/api/v1/temperature/{id} -->  validate request body', () => {
    return request(app).get('/api/v1/temperature/1').expect('Content-Type', /json/).expect(200).then(response => {
      expect(response.body).toEqual(expect.objectContaining({
        id: expect.any(String),
        temperature: expect.any(Number)
      }));
    });
  })
})
