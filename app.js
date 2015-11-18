'use strict';

require('./mongodb');
const koa = require('koa');
//const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const config = require('./config');
const router = require('./router');
const app = koa();

app.use(logger());

router(app);


app.listen(config.port);

console.log('***********************************');
console.log(`server listen the port ${config.port}`);
console.log('***********************************');