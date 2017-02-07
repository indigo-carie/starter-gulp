const gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  del = require('del'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
  imageMin = require('gulp-imagemin'),
  strip = require('gulp-strip-comments'),
  nunjucksRender = require('gulp-nunjucks-render'),
	data = require('gulp-data'),
  paths = {
  	neither:['src/*.html', 'src/**/*.html'],
  	styles:['src/css/**/*.scss', 'src/css/*.scss'],
  	styleSheet:['src/css/main.scss'],
  	scripts:['src/js/*.js','src/js/components/*.js', 'src/vendor/classList.min.js'],
  	images:['src/img/*.jpg', 'src/img/**/*'],
  	svgs:['src/**/*.svg'],
    info:['src/*.png', 'src/*.xml', 'src/*.ico', 'src/*.txt']
  },
  vendor = {
  	js: ['src/js/vendor/modernizr.js', 'src/js/vendor/picturefill.min.js']
  };

var flags = require('yargs').argv;

gulp.task('start',['clean','build','serve','watch']);
gulp.task('watch',['watch:styles','watch:scripts','watch:neither','watch:images','watch:svg','watch:info']);
gulp.task('build',['build:styles','build:scripts', 'build:scripts:vendor', 'build:svg', 'build:nunjucks', 'copy:images', 'copy:info']);

gulp.task('clean',function(){
	if(flags.prod){
		del.sync('dist/**');
	}
});

gulp.task('build:styles',function(){
	var dest = flags.prod?'dist/css':'build/css';
	var task = gulp.src(paths.styleSheet)
  .pipe(sourcemaps.init())
	.pipe(sass({includePaths: require('node-bourbon').includePaths}).on('error', sass.logError))
	.pipe(autoprefixer())
  .pipe(sourcemaps.write());
	if(flags.prod){
		task = task.pipe(cleanCSS())
		.pipe(concat('main.min.css'));
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

gulp.task('build:svg',function(){
	var dest = flags.prod?'dist':'build';
	var task = gulp.src(paths.svgs)
	.pipe(gulp.dest(dest))
	.pipe(connect.reload());
	return task;
});

gulp.task('build:nunjucks',function(){
	var dest = flags.prod?'dist':'build';
	var task = gulp.src(paths.neither[0])
	.pipe(data(function() {return require('./src/content/data.json')}))
	.pipe(nunjucksRender({path: ['src/views/']}))
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

gulp.task('copy:info',function(){
	var dest = flags.prod?'dist/':'build/';
	var task = gulp.src(paths.info);
	task = task.pipe(gulp.dest(dest))
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
	gulp.watch(paths.scripts, ['build:scripts'])
});

gulp.task('watch:svg', function(){
	gulp.watch(paths.svgs, ['build:svg'])
});

gulp.task('watch:neither', function(){
	gulp.watch(paths.neither, ['build:nunjucks'])
});

gulp.task('watch:images', function(){
	gulp.watch(paths.images, ['copy:images'])
});

gulp.task('watch:info', function(){
	gulp.watch(paths.info, ['copy:info'])
});
