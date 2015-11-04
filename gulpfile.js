'use strict';

// require all needed files
var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var merge = require('merge2');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var watch = require('gulp-watch');
var karma = require('karma').Server;
var tslint = require('gulp-tslint');

module.exports = function (config) {
    var tsProject = ts.createProject({
        module: 'commonjs',
        target: 'es5',
        noImplicitAny: false,
        sourceMap: false,
        declaration: true,
        noExternalResolve: false
    });

    // Clean out build directory
    gulp.task('clean', function () {
        del.sync([
            path.join(__dirname, 'build', config.appName),
            path.join(__dirname, 'appTypings', config.appName)
        ], {
            force: true
        });
    });

    // compile TypeScript
    gulp.task('ts', ['lint', 'clean'], function () {
        var tsResult = gulp
            .src(path.join(config.path, '**/*.ts'))
            .pipe(sourcemaps.init()) // with Sourcemaps
            .pipe(ts(tsProject));

        return merge([
            tsResult.dts // write automatically generated typing files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(__dirname, 'appTypings', config.appName))),
            tsResult.js // write compiled JavaScript files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(__dirname, 'build', config.appName)))
        ]);
    });

    // prepare files for browser with Browserify
    gulp.task('js', ['ts'], function () {
        return browserify({
            entries: path.join(__dirname, 'build', config.appName, 'main.js'),
            debug: true
        })
            // ignore required module (for libraries which you include yourself - config in package.json)
            .transform('browserify-shim')
            .bundle()
            .on('error', function (e) {
                console.log(e.toString());
                this.emit('end');
            })
            // save it as "{{applicationName}}Bundle.js"
            .pipe(source(path.join(config.appName + 'Bundle.js')))
            // in the application's "compiled" folder
            .pipe(gulp.dest(path.join(__dirname, 'build', config.appName, 'compiled')));
    });

    // run unit tests
    gulp.task('test', ['js'], function (done) {
        // files needed for testing
        var files = [
            // include needed libraries
            path.join(__dirname, 'node_modules/angular/angular.js'),
            path.join(__dirname, 'node_modules/angular-mocks/angular-mocks.js')
        ];
        // unless we're testing the common vertical, include it as an extra
        if (config.appName !== 'common') {
            files = files.concat([path.join(__dirname, 'build/common/compiled/commonBundle.js')])
        }
        // application, the actual tests
        files = files.concat([
            path.join(__dirname, 'build', config.appName, 'compiled/**/*.js'), // include the application
            path.join(__dirname, 'build', config.appName, 'tests/**/*.spec.js') // test files
        ]);

        // start Karma Test Runner
        new karma({
            basePath: config.path,
            browsers: ['PhantomJS'],
            frameworks: ['jasmine', 'browserify'],
            files: files,
            // process tests that were transpiled for the CommonJS module system
            preprocessors: {
                'build/js/tests/**/*.spec.js': ['browserify']
            },
            // mock away Angular as required
            browserify: {
                debug: true,
                transform: ['browserify-shim']
            },
            singleRun: true,
            autoWatch: false
        }, done).start();
    });

    gulp.task('lint', function () {
        return gulp
            .src(path.join(config.path, '**/*.ts'))
            .pipe(tslint())
            .pipe(tslint.report('verbose'));
    });

    // watch for file changes
    gulp.task('watch', ['test'], function () {
        var watchPath = [
            path.join(config.path, '**/*.ts')
        ];
        if (config.appName !== 'common') {
            watchPath = watchPath.concat(path.join(__dirname, 'build/common/compiled/*.js'));
        }

        return watch(watchPath, function () {
            gulp.start('test');
        });

    });

    gulp.task('default', ['test']);
};