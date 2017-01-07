const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')
const nodemon = require('gulp-nodemon')

//build to ./dist directory
gulp.task('build:dev', () => {
	return gulp.src('./lib/*')
		.pipe(babel({
			presets: ['es2017']
		}))
		.pipe(gulp.dest('./dist'))
})

//watch on changes and run build:dev
gulp.task('watch', () => {
	gulp.start('build:dev')
	return watch('./lib/*', () => {
		gulp.start('build:dev')
	})
})

//run nodemon server for development
gulp.task('nodemon', () => {
	nodemon({
		script: './dist/graphy.js',
		ext: 'js',
		env: { 'NODE_ENV': 'development' }
	})
})
