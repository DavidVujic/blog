/*global require:true */

var gulp = require('gulp');
var newer = require('gulp-newer');
var babel = require('gulp-babel');
var qunit = require('node-qunit-phantomjs');
var jshint = require('gulp-jshint');

var testFolder = 'tests';
var codeFolder = 'lib';
var dest = '/script/transpiled';
var files = '/script/es6/**/*.js';
var babelOptions = {
	presets: ['es2015'],
	plugins: ["transform-es2015-modules-amd"]
};

var tests = {
	source: testFolder + files,
	destination: testFolder + dest
};

var code = {
	source: codeFolder + files,
	destination: codeFolder + dest
};

var transpile = function (paths) {
	return gulp.src(paths.source)
		.pipe(newer(paths.destination))
		.pipe(babel(babelOptions))
		.pipe(gulp.dest(paths.destination));
};

var lint = function (paths) {
	return gulp.src(paths.source)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
};

gulp.task('copy vendor scripts', function () {
	gulp.src([
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/requirejs/require.js',
			'node_modules/babel-polyfill/dist/polyfill.min.js'
		])
		.pipe(newer('lib/script/vendor'));

	gulp.src([
			'node_modules/qunitjs/qunit/qunit.css',
			'node_modules/qunitjs/qunit/qunit.js'
		])
		.pipe(newer('tests/script/qunit'));
});

gulp.task('transpile tests', function () {
	return transpile(tests);
});

gulp.task('transpile source', function () {
	return transpile(code);
});

gulp.task('lint-tests', function () {
	return lint(tests);
});

gulp.task('lint-source', function () {
	return lint(code);
});

gulp.task('qunit', function () {
	qunit(testFolder + '/testrunner.html', {
		'verbose': false
	});
});

gulp.task('default', [
	'copy vendor scripts',
	'transpile tests',
	'transpile source',
	'lint-tests',
	'lint-source',
	'qunit'
]);
