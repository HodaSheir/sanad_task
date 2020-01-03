const pool = require("./dbConnection");

module.exports = function(data_to_search_obj , cb ){ 
    var  {drug_code, disease_code, description} = data_to_search_obj;

    var querySearch = '';
    if( !drug_code && !disease_code && !description){
        querySearch = 'SELECT * FROM interactions';
    }else{
        querySearch = `SELECT * FROM interactions WHERE `;
        drug_code ? querySearch += ` drug_code = '${drug_code}' AND` : ''  ;
        disease_code ? querySearch += ` disease_code = '${disease_code}' AND` : ''  ;
        description ? querySearch += ` description = '${description}'` : ''  ;
        if(querySearch.endsWith("AND")){ 
            querySearch = querySearch.slice(0, -3);
        }
    }
    
   pool.query(querySearch, (err, drugs) => {
        if (err) {
            console.log(err);
            cb(err)
        }else {
            console.log(null, drugs.rows);
            cb(null,drugs.rows);
        }
    });
};