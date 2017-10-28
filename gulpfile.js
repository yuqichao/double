var gulp = require('gulp'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename'),
    sprite = require('gulp.spritesmith'),
    merge = require('merge-stream'),
    clean = require('gulp-clean-css'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./src/sass/double.sass')
    .pipe(sass())
    .pipe(clean())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('copy', function(){
  var img = gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./dist/img'));
  var c = gulp.src('./src/img/c/*.*')
    .pipe(gulp.dest('./dist/img/c'));
  var css = gulp.src('./src/js/*.*')
    .pipe(gulp.dest('./dist/js'));
  return merge(img, css);
});

gulp.task('jade', function(){
  gulp.src('./src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'))
});

gulp.task('p1', function(){
  var data = gulp.src('./src/img/p1/*.png')
    .pipe(sprite({
      imgName: 'p1.sprite.png',
      cssName: 'p1.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p2', function(){
  var data = gulp.src('./src/img/p2/*.png')
    .pipe(sprite({
      imgName: 'p2.sprite.png',
      cssName: 'p2.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p3', function(){
  var data = gulp.src('./src/img/p3/*.png')
    .pipe(sprite({
      imgName: 'p3.sprite.png',
      cssName: 'p3.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p4', function(){
  var data = gulp.src('./src/img/p4/*.png')
    .pipe(sprite({
      imgName: 'p4.sprite.png',
      cssName: 'p4.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

//p5,p6,p7
gulp.task('p5', function(){
  var data = gulp.src('./src/img/p5/*.png')
    .pipe(sprite({
      imgName: 'p5.sprite.png',
      cssName: 'p5.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

//p8,p9
gulp.task('p8', function(){
  var data = gulp.src('./src/img/p8/*.png')
    .pipe(sprite({
      imgName: 'p8.sprite.png',
      cssName: 'p8.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p10', function(){
  var data = gulp.src('./src/img/p10/*.png')
    .pipe(sprite({
      imgName: 'p10.sprite.png',
      cssName: 'p10.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p11', function(){
  var data = gulp.src('./src/img/p11/*.png')
    .pipe(sprite({
      imgName: 'p11.sprite.png',
      cssName: 'p11.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

gulp.task('p12', function(){
  var data = gulp.src('./src/img/p12/*.png')
    .pipe(sprite({
      imgName: 'p12.sprite.png',
      cssName: 'p12.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});

//p13,p14
gulp.task('p13', function(){
  var data = gulp.src('./src/img/p13/*.png')
    .pipe(sprite({
      imgName: 'p13.sprite.png',
      cssName: 'p13.sprite.sass',
      padding: 5
    }));
  var img = data.img.pipe(gulp.dest('./src/img'));
  var css = data.css.pipe(gulp.dest('./src/sass'));
  return merge(img, css);
});
gulp.task('default', ['sass', 'jade', 'copy']);