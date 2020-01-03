const { Pool  }   = require("pg");

const pool = new Pool({
  user: "hoda",
  host: "localhost",
  database: "new_drugs",
  password: "386691",
  port: "5432"
});


 module.exports = pool;

//   var queryString = `INSERT INTO interactions (description, drug_code, disease_code, type) VALUES ('nothing', 'fre5rdh4tf65', 'ewdgserg5r4h54fdf', true)`;
//var queryString = `SELECT * FROM interactions where id = 1;`;