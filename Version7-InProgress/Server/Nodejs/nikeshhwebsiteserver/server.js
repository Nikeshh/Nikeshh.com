const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/.env' });

const DBConnect = require('./utils/dbConnect');