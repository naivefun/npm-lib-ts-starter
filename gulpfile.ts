import { task, src, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import merge from 'merge2';
import pump from 'pump';
import uglify from 'gulp-uglify';

const project = createProject('tsconfig.json');
const tsSrc = ['src/**/*.ts', '!src/__tests__/**'];
task('compile', () => {
  const result = src(tsSrc)
    .pipe(project());

  return merge([
    result.dts.pipe(dest('definition')),
    result.js.pipe(dest('lib'))
  ]);
});

task('compress', ['compile'], (cb) => {
  pump([
    src('lib/**/*.js'),
    uglify(),
    dest('lib')
  ])
});

task('default', ['compress']);
