var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browerSync = require("browser-sync");
var path = require("path");
var fs= require("fs");
var fsExtra = require("fs-extra");
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');

var config = {
    publicPath: __dirname + '/target/distro',
    app: {
        path: __dirname + '/app',
        main: 'main.ts',
        result: 'application.js'
    }
};

gulp.task('compile-js', function() {
    var bundler = browserify({basedir: config.app.path})
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))        
        .pipe(gulp.dest(config.publicPath));
});

gulp.task('copy-resources', ['compile-js','copy-index'], function(){
    
    return gulp.src(config.app.path)
    .pipe(gulp.dest(config.publicPath));
});

gulp.task('copy-index', function(){
    var cDir = process.cwd();
    var index = "index.html";
    fsExtra.copySync(path.join(cDir, index), path.join(config.publicPath, index));
})


gulp.task('default',['copy-resources']);

gulp.task('watch', function(){
    gulp.watch(config.app.path, ['copy-resources']);
    var cDir = process.cwd();
    var index = "index.html";
    gulp.watch(path.join(cDir, index),['copy-index']);
    
});


