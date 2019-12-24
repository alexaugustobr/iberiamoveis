"use strict";const autoprefixer=require("gulp-autoprefixer"),browsersync=require("browser-sync").create(),cleanCSS=require("gulp-clean-css"),del=require("del"),gulp=require("gulp"),header=require("gulp-header"),merge=require("merge-stream"),plumber=require("gulp-plumber"),rename=require("gulp-rename"),sass=require("gulp-sass"),uglify=require("gulp-uglify"),pkg=require("./package.json"),banner=["/*!\n"," * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n"," * Copyright 2013-"+(new Date).getFullYear()," <%= pkg.author %>\n"," * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n"," */\n","\n"].join("");function browserSync(e){browsersync.init({server:{baseDir:"./"},port:3e3}),e()}function browserSyncReload(e){browsersync.reload(),e()}function clean(){return del(["./vendor/"])}function modules(){var e=gulp.src("./node_modules/bootstrap/dist/**/*").pipe(gulp.dest("./vendor/bootstrap")),s=gulp.src("./node_modules/@fortawesome/fontawesome-free/css/**/*").pipe(gulp.dest("./vendor/fontawesome-free/css")),r=gulp.src("./node_modules/@fortawesome/fontawesome-free/webfonts/**/*").pipe(gulp.dest("./vendor/fontawesome-free/webfonts")),p=gulp.src("./node_modules/jquery.easing/*.js").pipe(gulp.dest("./vendor/jquery-easing")),o=gulp.src(["./node_modules/jquery/dist/*","!./node_modules/jquery/dist/core.js"]).pipe(gulp.dest("./vendor/jquery"));return merge(e,s,r,o,p)}function css(){return gulp.src("./scss/**/*.scss").pipe(plumber()).pipe(sass({outputStyle:"expanded",includePaths:"./node_modules"})).on("error",sass.logError).pipe(autoprefixer({cascade:!1})).pipe(header(banner,{pkg:pkg})).pipe(gulp.dest("./css")).pipe(rename({suffix:".min"})).pipe(cleanCSS()).pipe(gulp.dest("./css")).pipe(browsersync.stream())}function js(){return gulp.src(["./js/*.js","!./js/*.min.js","!./js/contact_me.js","!./js/jqBootstrapValidation.js"]).pipe(uglify()).pipe(header(banner,{pkg:pkg})).pipe(rename({suffix:".min"})).pipe(gulp.dest("./js")).pipe(browsersync.stream())}function watchFiles(){gulp.watch("./scss/**/*",css),gulp.watch(["./js/**/*","!./js/**/*.min.js"],js),gulp.watch("./**/*.html",browserSyncReload)}const vendor=gulp.series(clean,modules),build=gulp.series(vendor,gulp.parallel(css,js)),watch=gulp.series(build,gulp.parallel(watchFiles,browserSync));exports.css=css,exports.js=js,exports.clean=clean,exports.vendor=vendor,exports.build=build,exports.watch=watch,exports.default=build;