const gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  del = require('del'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  imageMin = require('gulp-imagemin'),
  strip = require('gulp-strip-comments'),
  paths = {
  	neither:['src/*.html', 'src/**/*.html'],
  	styles:['src/css/**/*.scss', 'src/css/*.scss'],
  	styleSheet:['src/css/main.scss'],
  	scripts:['src/js/*.js','src/js/components/*.js'],
  	images:['src/img/*.jpg', 'src/img/*.svg', 'src/img/**/*'],
  	html:['src/*.html', 'src/**/*.html']
  },
  vendor = {
  	js: ['src/js/vendor/modernizr.js', 'src/js/vendor/picturefill.js']
  };

var flags = require('yargs').argv;

gulp.task('start',['clean','build','serve','watch']);
gulp.task('watch',['watch:styles','watch:scripts','watch:neither','watch:html']);
gulp.task('build',['build:styles','build:scripts', 'build:scripts:vendor', 'build:html', 'copy:images']);

gulp.task('clean',function(){
	if(flags.prod){
		del.sync('dist/**');
	}
});

// Lint Task
gulp.task('lint', function() {
  var task = gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('watch:scripts'));
    return task;
});

gulp.task('build:styles',function(){
	var dest = flags.prod?'dist/css':'build/css';
	var task = gulp.src(paths.styleSheet)
	.pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError));
	if(flags.prod){
		task = task.pipe(cleanCSS())
		.pipe(concat('styles.min.css'));
	}
	task = task.pipe(gulp.dest(dest))
	.pipe(connect.reload());
	return task;
});

gulp.task('build:scripts',function(){
	var dest = flags.prod?'dist/js':'build/js';
	var name = flags.prod?'main.min.js':'main.js';
	var task = gulp.src(paths.scripts)
	.pipe(concat(name, {newline:''}));
	if(flags.prod){
		task = task.pipe(strip())
		.pipe(uglify({mangle:true}));
	}
	task = task.pipe(gulp.dest(dest))
	.pipe(connect.reload());
	return task;
});

gulp.task('build:scripts:vendor',function(){
	del.sync(['build/js/vendor/vendor.min.js']);
	var dest = flags.prod?'dist/js/vendor':'build/js/vendor';
	var name = flags.prod?'vendor.min.js':'vendor.js';
	var task = gulp.src(vendor.js)
	.pipe(concat(name, {newline:''}));
	if(flags.prod){
		task = task.pipe(strip())
		.pipe(uglify({mangle:true}));
	}
	task = task.pipe(gulp.dest(dest));
	return task;
});

gulp.task('build:html',function(){
	var dest = flags.prod?'dist':'build';
	var task = gulp.src(paths.html)
	.pipe(gulp.dest(dest))
	.pipe(connect.reload());
	return task;
});

gulp.task('copy:images',function(){
	var dest = flags.prod?'dist/img':'build/img';
	var task = gulp.src(paths.images)
	.pipe(imageMin());
	task = task.pipe(gulp.dest(dest))
	.pipe(connect.reload());
	return task;
});

gulp.task('reload',function(){
	return gulp.src(paths.neither)
	.pipe(connect.reload());
});

gulp.task('serve', function(){
	var base = flags.prod?'dist/':'build/';
	var fallback = flags.prod?'dist/index.html':'build/index.html';
	connect.server({
		root:'build',
		port:'3030',
		livereload:true,
		fallback: fallback
	})
});

gulp.task('watch:styles', function(){
	gulp.watch(paths.styles, ['build:styles'])
});

gulp.task('watch:scripts', function(){
	gulp.watch(paths.scripts, ['lint', 'build:scripts'])
});

gulp.task('watch:html', function(){
	gulp.watch(paths.html, ['build:html'])
});

gulp.task('watch:neither', function(){
	gulp.watch(paths.neither, ['reload'])
});
