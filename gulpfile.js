import gulp from 'gulp';
const { src, dest, series, watch } = gulp;

import gulpSass from 'gulp-sass';
import autoPrefix from 'gulp-autoprefixer';
import cssMinify from 'gulp-clean-css';
import concat from 'gulp-concat';
import jsMinify from 'gulp-terser';
import * as sass from 'sass';
const scss = gulpSass(sass);

// Sass
function compileSass(){
    return src('scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe( cssMinify() )
        .pipe( autoPrefix() )
        .pipe( dest('./dist/css') )
}

// Scripts
function compileScripts() {
    return src('./js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(jsMinify())
        .pipe(dest('./dist/js'))
}

function watchFiles() {
    watch(['scss/**/*.scss', 'js/*.js'], series(compileSass, compileScripts));
}

// Execute tasks in order.
export default series(compileSass, compileScripts, watchFiles);