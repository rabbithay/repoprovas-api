import dotenv from 'dotenv';
import { getConnectionManager } from "typeorm";

dotenv.config();

export default async function connect () {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: "default",
    type: "postgres",
    url: process.env.ORM_URL,
    entities: ["src/entities/*.ts"]
  });
  await connection.connect();
  return connection;
}