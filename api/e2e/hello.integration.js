const request = require('supertest');

const createApp = require('../src/app');

describe('Test for Hello Endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  describe('Test for Get /', () => {
    test('should return Hello World!', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => expect(response.text).toEqual('Hello World!')));
  });

  afterAll(async () => {
    await server.close();
  });
});
