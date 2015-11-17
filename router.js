'use strict';

const Router = require('koa-router');
const user = require('./controller/user');
const topic = require('./controller/topic');
const reply = require('./controller/reply');
const message = require('./controller/message');


//const auth = require('./middleware/auth');

const router = new Router();
// User 用户路由

// user controller
// router.get('/user/:name', user.show); // 用户个人主页


module.exports = (app) => app.use(router.routes())