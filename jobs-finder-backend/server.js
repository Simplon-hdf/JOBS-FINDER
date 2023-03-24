const express = require("express");
const pg = require("pg");

const poolConfig = {
  host: "localhost",
  port: 5432,
  database: "jobs-finder",
  user: "root" /* user name and the password we provided to the DB(the same as connecting to DB with migrate)  */,
  password: "secret",
};
const pool = new pg.Pool(poolConfig);

//To check the connection is established
pool.query("SELECT   1 + 1;").then((res) => {
  console.log("Connected avec success");
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
app.get("/comment", async (req, res) => {
  try {
    await pool.query(
      "CREATE TABLE schools( id SERIAL PRIMARY KEY, name VARCHAR(100), address VARCHAR(100) )"
    );
    res.send("DB Created");
  } catch (error) {
    res.status(500).send("Error occurs");
  }
});
app.use(express.urlencoded({ extended: true }));

/* app.listen(port, () => {
  console.log("====================================");
  console.log("Application running on port 🔥🔥", port);
  console.log("====================================");
}); */
