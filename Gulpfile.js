var gulp = require('gulp');
var rename = require('gulp-rename');
var es6ModuleTranspiler = require('gulp-es6-module-transpiler');

var es = require('event-stream');

gulp.task('scripts', function() {
  gulp.src(['./lib/main.js'])
    .pipe(es6ModuleTranspiler({type: 'amd', moduleName: 'ember-numeral'}))
    .pipe(rename('ember-numeral.js')).pipe(gulp.dest('./dist'));
});

gulp.task('default', ['scripts']);
