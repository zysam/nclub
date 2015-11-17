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
router.get('/user/:name', user.show); // 用户个人主页
// router.get('/setting', auth.userRequired, user.showSetting); // 用户个人设置页
// router.post('/setting', auth.userRequired, user.setting); // 提交个人信息设置
// router.get('/stars', user.listStars); // 显示所有达人列表页
// router.get('/users/top100', user.top100);  // 显示积分前一百用户页
// router.get('/user/:name/collections', user.listCollectedTopics);  // 用户收藏的所有话题页
// router.get('/user/:name/topics', user.listTopics);  // 用户发布的所有话题页
// router.get('/user/:name/replies', user.listReplies);  // 用户参与的所有回复页
// router.post('/user/set_star', auth.adminRequired, user.toggleStar); // 把某用户设为达人
// router.post('/user/cancel_star', auth.adminRequired, user.toggleStar);  // 取消某用户的达人身份
// router.post('/user/:name/block', auth.adminRequired, user.block);  // 禁言某用户
// router.post('/user/:name/delete_all', auth.adminRequired, user.deleteAll);  // 删除某用户所有发言

module.exports = (app) => app.use(router.routes())