const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for GetBooks', () => {
    test('should return 2 books', async () => {
      // Arrange
      const fakeBooks = generateManyBook(2);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Asset
      expect(books.length).toEqual(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return first book', async () => {
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Asset
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
