const { log } = require("console");
const express = require("express");
const pg = require("pg");

const poolConfig = {
  host: "db",
  port: 5432,
  database: "root",
  user: "root" /* user name and the password we provided to the DB(the same as connecting to DB with migrate)  */,
  password: "secret",
};
const pool = new pg.Pool(poolConfig);

//To check the connection is established
pool.query("SELECT   1 + 1;").then((res) => {
  console.log("Coonected avec seccess");
  console.log("====================================");
  console.log(res);
  console.log("====================================");
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
