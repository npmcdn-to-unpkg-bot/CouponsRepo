var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browerSync = require("browser-sync");
var path = require("path");
var fs = require("fs");
var fsExtra = require("fs-extra");
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var buffer = require('vinyl-buffer');
var tslint = require('gulp-tslint');
var htmlmin = require('gulp-htmlmin');

var config = {
    publicPath: __dirname + '/target/distro',
    app: {
        path: __dirname + '/app',
        main: 'main.ts',
        result: 'application.js',
        indexHtml: __dirname + '/index.html'
    }

};

var tsFiles = [config.app.path + "/**/*.ts"];
var files = [
    config.app.path + "/**/*.js",
    config.app.path + "/**/*.css",
    config.app.path + "/**/*.jpg",
    config.app.path + "/**/*.jpeg",
    config.app.path + "/**/*.png",
    config.app.path + "/**/*.scss"
];

gulp.task('tsLint', function () {
    gulp.src(tsFiles)
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

gulp.task('compile-js', ['tsLint'], function () {
    var bundler = browserify({ basedir: config.app.path })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.publicPath));
});

gulp.task('copy-html',['copy-index'], function(){
   return gulp.src([config.app.path + "/**/*.html", config.app.path + "/**/*.htm", config.app.path + "/../index.html"])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.publicPath))
})

gulp.task('copy-resources', ['compile-js', 'copy-html'], function () {
    return gulp.src(files)
        .pipe(gulp.dest(config.publicPath));
});

gulp.task('copy-index', function () {
    return gulp.src([config.app.path + "/../index.html"])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(config.publicPath))
})


gulp.task('default', ['copy-resources']);

gulp.task('watch', function () {
    gulp.watch([files].concat(tsFiles).concat([config.app.path + "/../index.html"]), ['copy-resources']);
});


