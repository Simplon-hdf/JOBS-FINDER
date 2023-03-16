const express = require("express");
const pg = require("pg");

const pool = new pg.Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: "jobs-finder",
  user: "root" /* user name and the password we provided to the DB(the same as connecting to DB with migrate)  */,
  pasword: "secret",
});

//To check the connection is established
pool.query("SELECT   1 + 1;").then((res) => console.log(res));

const app = express();

app.use(express.urlencoded({ extended: true }));
