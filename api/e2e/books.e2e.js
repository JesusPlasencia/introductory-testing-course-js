const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config/index');

// !VARIABLES DB
const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;
const COLLECTION = 'books';

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return books', async () => {
      // Arrange
      const seedData = await database.collection(COLLECTION).insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'JP',
        },
        {
          name: 'Book 2',
          year: 2022,
          author: 'JP',
        },
      ]);
      console.log(seedData);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          // Assert
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });

    afterAll(async () => {
      await server.close();
      await database.dropDatabase();
    });
  });
});
