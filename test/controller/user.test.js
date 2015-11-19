'use strict';

const mochaConf = require('../mocha.config');

const request = mochaConf.request;

describe('User controller', function () {
	it('GET /users/:id should', function (done) {
		request
			.get('/user/zysam')
			.expect(200, (err, res) => {
				res.body.should.be.ok;
				done(err);
			})
	})
})