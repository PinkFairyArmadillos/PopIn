const { Pool } = require('pg');

const PG_URI = 'postgres://svhlteey:n-OF-XsOkWrudo4qdlHeYIDEk5JoYxR6@drona.db.elephantsql.com:5432/svhlteey';
const pool = new Pool({
  connectionString: PG_URI,
});

// Talk to Keiran if you need access to the postgres database!

module.exports = {
  query: (text, params, callback) => {
    console.log('query executed', text);
    return pool.query(text, params, callback);
  },
};
