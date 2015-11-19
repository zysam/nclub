'use strict';

const mochaConf = require('../mocha.config');

const request = mochaConf.request;

describe('sign controller', function () {
	let now = Date.now();
	const profile = {
		loginname: 'testuser' + now,
		email: now + '@test.com',
		pass: 'wfffffffffff',
	}

	it('should sign up a user', function (done) {
		request 
			.post('/signup')
			.send(profile)
			.expect(201, (err, res) => {
				res.body.should.ok;
				done(err);
			})
	})
})