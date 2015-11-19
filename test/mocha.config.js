'use strict';

//const config = require('../config');
const app = require('../app');
const supertest = require('supertest');

let port = 5354;
let baseUrl = `http://localhost:${port}`;
let server;
// initiate server before each test
console.log('***Mocha tests on port: %s ***', port);
before(() => server = app.listen(port));
after( () => server.close());

exports.request = supertest(baseUrl);
