'use strict';

const mongoose = require('mongoose');
const config   = require('./config');

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
  console.info('***mongodb has connected URI: %s ***', config.db);
});