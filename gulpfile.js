/**
 *  工程化
 */
'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const nodemon = require('gulp-nodemon');

gulp.task('test', function () {
	gulp.src('test/**/*.test.js', {read: false})
		.pipe(mocha({
			timeout: 5000,
			reporter: 'spec',
			require: ['should']
		}))
		.once('end',function(){
			process.exit();
		});
});

gulp.task('dev', () => {
	nodemon({
		script: 'app.js',
		ext: 'js',
		ingore: 'node_modules'
		delayTime: 1,
		watch: ['app.js']
	})
});