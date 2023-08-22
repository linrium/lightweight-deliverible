const duckdb = require('duckdb')

const db = new duckdb.Database('./data/data.duckdb')
const conn = db.connect()

const run = (stmt) => new Promise((resolve, reject) => {
  db.all(stmt, (err, res) => {
    if (err) {
      return reject(err)
    }

    return resolve(res)
  })
})

async function main() {
  await run(`
      CREATE TABLE tests
      (
          number     BIGINT,
          number1    BIT,
          boolean    BOOLEAN,
          blob       BLOB,
          date       DATE,
          double DOUBLE,
          decimal    DECIMAL(18, 3),
          hugeint    HUGEINT,
          int        INTEGER,
          interval INTERVAL,
          real       REAL,
          smallint   SMALLINT,
          time       TIME,
          timestamp  TIMESTAMP,
          timestamp1 TIMESTAMP WITH TIME ZONE,
          tinyint    TINYINT,
          ubigint    UBIGINT,
          uinteger   UINTEGER,
          usmallint  USMALLINT,
          utinyint   UTINYINT,
          uuid       UUID,
          text       VARCHAR,
          list       INT[],
          struct     STRUCT(i INT, j VARCHAR),
          map        MAP( INT, VARCHAR),
          u UNION(num INT, text VARCHAR),
      );
  `)
  await run(`INSERT INTO tests
             VALUES (1234567890123456789, -- BIGINT
                     '101010'::BIT, -- BIT
                     TRUE, -- BOOLEAN
                     X'7F8F9FAFBFCFDFEFF', -- BLOB (hexadecimal representation)
                     '2023-08-22', -- DATE
                     3.14159, -- DOUBLE
                     123.456, -- DECIMAL
                     9876543210987654321, -- HUGEINT
                     12345, -- INTEGER
                     INTERVAL '1 day', -- INTERVAL
                     2.71828, -- REAL
                     42, -- SMALLINT
                     '15:30:00', -- TIME
                     '2023-08-22 12:34:56', -- TIMESTAMP
                     '2023-08-22 12:34:56+00:00', -- TIMESTAMP WITH TIME ZONE
                     5, -- TINYINT
                     18446744073709551615, -- UBIGINT
                     4294967295, -- UINTEGER
                     65535, -- USMALLINT
                     255, -- UTINYINT
                     '6ba7b810-9dad-11d1-80b4-00c04fd430c8', -- UUID
                     'This is some text', -- VARCHAR
                        [1, 2, 3], -- INT[]
                        {'i' : 42, 'j': 'a'}, -- STRUCT
                     map([1,2], ['a','b']), -- MAP
                     union_value(num := 2) -- UNION
                    );
  `)
}

main().catch(console.log)
