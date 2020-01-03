BEGIN;
DROP TABLE IF EXISTS interactions CASCADE;

CREATE TABLE interactions (
     id             SERIAL PRIMARY KEY,
     description   TEXT NOT NULL,
     drug_code     TEXT NOT NULL,
     disease_code  TEXT NOT NULL,
     type int NOT NULL

);
COMMIT;

-- INSERT INTO interactions (description, drug_code, disease_code, type) 
-- VALUES ('nothing', 'fre5rdh4tf65', 'ewdgserg5r4h54fdf', true);
-- INSERT INTO interactions (description, drug_code, disease_code, type) 
-- VALUES ('hgkjgh', 'fre5rdh4tf65', 'ewdgserg5r4h54fdf', false);

INSERT INTO interactions (description,drug_code,disease_code,type)
select
    left(MD5(i::TEXT), 10),
    left(MD5(i::TEXT), 3),
    left(md5(random()::text), 3),
    --CAST((RANDOM() * (899) + 100) as INT),
    --CAST((RANDOM() * (899) + 100) as INT),
    floor(random() * 2 + 1)::int
from generate_series(1, 200) s(i);
