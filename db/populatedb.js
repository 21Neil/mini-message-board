import { Client } from 'pg';
import 'dotenv/config';

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255),
    username VARCHAR(50),
    added TIMESTAMP
  );
`;

const main = async () => {
  console.log('seeding...');
  const client = new Client(process.env.DB_URL);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
};

main()
