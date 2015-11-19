'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');

gulp.task('test', function () {
	gulp.src('test/**/*.test.js', {read: false})
		.pipe(mocha({
			timeout: 2000,
			reporter: 'spec',
			require: ['should']
		}))
		.once('end',function(){
			process.exit();
		});
});

gulp.task('server:dev', () => {
	nodemon({
		script: 'app.js',
		verbose: true,
		ext: 'js',
		ignore: ['node_modules/', 'test/'],
		delayTime: 1,
		watch: ['./']
	})
});

gulp.task('default',['server:dev']);