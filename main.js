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
  await run(`CREATE TABLE cities (
    name            VARCHAR,
    lat             DECIMAL,
    lon             DECIMAL
);`)
  await run(`INSERT INTO cities VALUES ('San Francisco', -194.0, 53.0);`)
}

main().catch(console.log)
