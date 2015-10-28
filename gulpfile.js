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

module.exports = function (config) {
    var tsProject = ts.createProject({
        module: "commonjs",
        target: "es5",
        noImplicitAny: false,
        sourceMap: false,
        declaration: true,
        noExternalResolve: false
    });

    // Clean out build directory
    gulp.task('clean', function () {
        del.sync(path.join(config.path, 'build/**'));
    });

    // compile TypeScript
    gulp.task('ts', ['clean'], function () {
        var tsResult = gulp.src([
                'common/src/**/*.ts',
                path.join(config.path, 'src/**/*.ts')
            ])
            .pipe(sourcemaps.init()) // with Sourcemaps
            .pipe(ts(tsProject));

        return merge([
            tsResult.dts // write automatically generated typing files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(config.path, 'build/typings'))),
            tsResult.js // write compiled JavaScript files
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(path.join(config.path, 'build/js')))
        ]);
    });

    // prepare files for browser with Browserify
    gulp.task('js', ['ts'], function () {
        return browserify({
            entries: path.join(config.path, 'build/js/app.js'),
            debug: true
        })
            // ignore required module (for libraries which you include yourself)
            .transform('browserify-shim')
            .bundle()
            .on('error', function (e) {
                console.log(e.toString());
                this.emit('end');
            })
            // save it as "{{applicationName}}Bundle.js"
            .pipe(source(path.join(config.path, config.appName + 'Bundle.js')))
            // in the application's "build/compiled" folder
            .pipe(gulp.dest(path.join(config.path, 'build/compiled')));
    });

    // run unit tests
    gulp.task('test', ['js'], function(done) {
        // start Karma Test Runner
        new karma({
            basePath: config.path,
            browsers: ['PhantomJS'],
            frameworks: ['jasmine', 'browserify'],
            files: [
                // include needed libraries
                path.join(__dirname, 'node_modules/angular/angular.js'),
                path.join(__dirname, 'node_modules/angular-mocks/angular-mocks.js'),
                path.join(__dirname, 'common/build/compiled/commonBundle.js'),
                'build/compiled/**/*.js', // include the application
                'build/js/tests/**/*.spec.js' // test files
            ],
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

    // watch for file changes
    gulp.task('watch', ['test'], function () {
        var watchPath = [
            path.join(config.path, 'src/**/*.ts'),
            path.join(config.path, 'test/**/*.ts')
        ];
        if (config.appName !== 'common') {
            watchPath = watchPath.concat(path.join(__dirname, 'common/build/**/*.js'));
        }

        return watch(watchPath, function() {
            gulp.start('test');
        });

    });

    gulp.task('default', ['test']);
};