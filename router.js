'use strict';

const Router = require('koa-router');
const sign = require('./controller/sign');
const user = require('./controller/user');
const topic = require('./controller/topic');
const reply = require('./controller/reply');
const message = require('./controller/message');


//const auth = require('./middleware/auth');

const router = new Router();

// sign 注册相关
router.post('/signup', sign.signup); // 用户注册

// User 用户路由
router.get('/user/:name', user.show); // 用户个人主页


module.exports = (app) => app.use(router.routes())