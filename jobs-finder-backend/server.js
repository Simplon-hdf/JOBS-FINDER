const { log } = require("console");
const express = require("express");
const pg = require("pg");

const poolConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DATABASE,
  user: process.env
    .DB_USER /* user name and the password we provided to the DB(the same as connecting to DB with migrate)  */,
  password: process.env.DB_PASSWORD,
};
const pool = new pg.Pool(poolConfig);

//To check the connection is established
pool.query("SELECT   1 + 1;").then((res) => {
  console.log("Coonected avec seccess");
});

const app = express();
const port = process.env.PORT || 3002;
app.get("/", (req, res) => {
  console.log("Hello world");
  res.send("Hello world");
});
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("====================================");
  console.log("Application running on port 🔥🔥", port);
  console.log("====================================");
});
