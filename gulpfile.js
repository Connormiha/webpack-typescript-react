'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');
const stylint = require('gulp-stylint');

/**
 *
 * @desc Check TypeScript validation
 */
gulp.task('tslint', ()=>
    gulp.src(['src/**/*.{ts,tsx}'])
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
);

/**
 *
 * @desc Check stylus validation
 */
gulp.task('styluslint', ()=>
    gulp.src(['src/css/*.styl'])
        .pipe(stylint())
        .pipe(stylint.reporter())
);

/**
*
* @desc validation Stylus and TypeScript
*/
gulp.task('lint', ['tslint', 'styluslint']);
