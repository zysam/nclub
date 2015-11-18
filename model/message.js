'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  schema 建立模型
 *  @type {Schema}
 */
const schema = new Schema({

});

// Indexes
// schema.index();

//Virtuals

// Plugins

//schema.plugin();

// Middleware Hook

// Methods
// schema.methods = {}

// Statics
// all return promise
// schema.statics = {}

/**
 * Model And exports
 * @api Public
 */
module.exports = mongoose.model('Message', schema);

