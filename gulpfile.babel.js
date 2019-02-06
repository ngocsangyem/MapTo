import  del from 'del';
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import {
	argv
} from 'yargs';

const $ = plugins();
const server = browserSync.create();

const port = argv.port || 9000;

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;



function html() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))
}

// Task srcipts

function scripts() {
	return gulp.src('src/*.js')
		.pipe($.plumber())
		.pipe($.if(!isProd, $.sourcemaps.init()))
		// .pipe($.babel())
		.pipe($.if(isProd, $.uglify()))
		.pipe($.if(!isProd, $.sourcemaps.write('.')))
		.pipe($.minify())
		.pipe(gulp.dest('dist/js'))
		.pipe(server.reload({
			stream: true
		}));
}

// Load



function clean() {
	return del('dist')
}


function startAppServer() {
	server.init({
		notify: false,
		port,
		server: {
			baseDir: './dist',
			routes: {
				'/node_modules': 'node_modules'
			}
		}
	});
	gulp.watch('src/*.html' , gulp.series(html))
	gulp.watch('src/*.js' , gulp.series(scripts))
	gulp.watch('dist/*.html').on('change', browserSync.reload)
	gulp.watch('dist').on('change', browserSync.reload)
}

function startDistServer() {
	server.init({
		notify: false,
		port,
		server: {
			baseDir: 'dist',
			routes: {
				'/node_modules': 'node_modules'
			}
		}
	});
};

export const build = gulp.series(
	gulp.parallel(
		html,
		scripts
	)
);

let serve;
if (isDev) {
	serve = gulp.series(clean, gulp.parallel(html,scripts),startAppServer);
} else if (isProd) {
	serve = gulp.series(clean, build, startDistServer);
}
export {
	serve
};

export default build;