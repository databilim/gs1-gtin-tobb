const fs = require("fs");
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'user',
      password : 'passwd',
      database : 'database'
    }
  });

  module.exports = knex;