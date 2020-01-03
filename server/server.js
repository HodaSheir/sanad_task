const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var xml = require('xml');
var fs = require('fs');
const open = require('open');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
const port = 4000 ;
const getDrugsInfo = require('./database/getDrugsInfo');

app.post('/getDrugs', (req, res) => {
  getDrugsInfo(req.body, (err, drugs) => {
    if(err){
      console.log(err);
    }else{
 
      let drugAsXMl = drugs.map(function(d){
        return {
          drug : [
            {id : d.id},
            {description: d.description},
            {drug_code: d.drug_code},
            {disease_code: d.disease_code},
            {type: d.type}
          ]
        }
      })

      fs.writeFile('drugs_search.xml', xml(drugAsXMl,true), function(err, data) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('updated!');
          open('drugs_search.xml');
        }
      });

      res.set('Content-Type', 'application/json');
      res.send(drugs);
    }
  })
});

app.listen(port , () => console.log(`Server started on port ${port}` ));

  // postgres://hoda:386691@localhost:5432/new_drugs