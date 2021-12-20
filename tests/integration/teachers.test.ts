import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";
import { clearDatabase } from "../utils/clearDatabase";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});


describe('GET /teachers', () => {
  it('should return status 200 and a list of teachers in case of success', async() => {
      //...
  })
})

describe('GET /teachers/:id', () => {
  it('should return status 200 and a list of teachers in case of success', async() => {
      //...
  })
  it('should return status 404 when receive a invalid id', async() => {
    //...
})
})

afterAll(async () => {
  await getConnection().close();
});