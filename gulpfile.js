const   gulp            = require('gulp'),
        sass            = require('gulp-sass')(require('sass')),
        sourcemaps      = require('gulp-sourcemaps'),
        rename          = require('gulp-rename'),
        minify          = require('gulp-minifier'),
        concat          = require('gulp-concat'),
        browserSync     = require('browser-sync').create(),
        webpackStream   = require('webpack-stream'),
        {scriptsConfig} = require('./webpack.js'),
        webpack         = require('webpack');

gulp.task('styles', function() {
    const sassOptions = {
        outputStyle: 'expanded'
    };

    return gulp.src(
        'src/assets/scss/*.scss'
    )
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(minify({
        minify: true,
        minifyCSS: true
    }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('./src/assets/js/index.js')
    .pipe(webpackStream(scriptsConfig), webpack)
    .pipe(concat('scripts.js'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default', gulp.series('scripts', 'styles'));