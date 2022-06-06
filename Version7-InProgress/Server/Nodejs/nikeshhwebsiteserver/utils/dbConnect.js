const mongoose = require('mongoose');

const DBCluster = process.env.DATABASE;
const DBLocal = process.env.DATABASE_LOCAL;

let DB_URL = DBCluster;