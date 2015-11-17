'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
});


// Indexes


//Virtuals
// schema.virtual()

// Plugins
// schema.plugin();

// Middleware Hook
// schema.pre('save', next => {

// });

// Methods
// schema.methods = {

// }

// Statics
// schema.statics = {}

/**
 * Expose Model User
 * @api public
 */
module.exports = mongoose.model('User', schema);
