'use strict';

const mongoose = require('mongoose');
const Schema = require('Schema');

const schema = new Schema({
});

// Indexes
// schema.index();

// Virtuals

// Plugins
// schema.plugin();

// Middleware Hook

// Methods
// schema.methods = {}

/**
 * Model
 * @api Public
 */
module.exports = mongoose.model('Reply', schema);
