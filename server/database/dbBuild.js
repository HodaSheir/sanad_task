const pool = require('./dbConnection');
const fs = require('fs');
const db = fs.readFileSync(__dirname + "/db.sql", "utf8");

pool.query(db,
    (err, res) => {
        if(err){
          console.log(err);
        } else {
        console.log('Success');
        }
      pool.end();
    }
  );