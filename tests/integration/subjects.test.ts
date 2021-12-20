import supertest from "supertest";
import app, { init } from "../../src/app";
import { getConnection } from "typeorm";

beforeAll(async () => {
  await init();
});

describe('GET /subjects', () => {
  it('should return status 200 and a list of subjects in case of success', async() => {
      //...
  })
})

describe('GET /subjects/:id', () => {
  it('should return status 200 and a list of subjects in case of success', async() => {
      //...
  })
  it('should return status 404 when receive a invalid id', async() => {
    //...
  })
})

afterAll(async () => {
  await getConnection().close();
});