import "@testing-library/jest-dom";
import {server} from 'src/mocks/server.js';

beforeAll(() => {
  server.listen()
  console.log('server listening')
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
