const   gulp            = require('gulp'),
        sass            = require('gulp-sass')(require('sass')),
        sourcemaps      = require('gulp-sourcemaps'),
        rename          = require('gulp-rename'),
        minify          = require('gulp-minifier'),
        concat          = require('gulp-concat'),
        browserSync     = require('browser-sync').create();

gulp.task('sass', function() {
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
    .pipe(gulp.dest('dist/assets/'))
    .pipe(browserSync.stream());
});