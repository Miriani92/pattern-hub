import pg from "pg";
const { Client } = pg;
const client = new Client({
  host: "localhost",
  port: 5432,
  database: "pattern",
  user: "mac",
  password: "12345",
});

export default client;
