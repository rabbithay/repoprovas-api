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

const exam = 

describe('POST /exams', () => {
  it('should return status 201 when receive valid params', async() => {
      //...
  })

  it('should return status 400 when receive invalid params', async() => {
    //...
  })
})

describe('GET /exams', () => {
  it('should return status 200 and a list of exams in case of success', async() => {
      //...
  })
})

afterAll(async () => {
  await getConnection().close();
});