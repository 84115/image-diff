#!/bin/bash

function render {
  phantomjs image-diff.js $1 $2 320
  phantomjs image-diff.js $1 $2 480
  phantomjs image-diff.js $1 $2 768
  phantomjs image-diff.js $1 $2 1024
  phantomjs image-diff.js $1 $2 1600
  phantomjs image-diff.js $1 $2 1920
}

render "http://www.yoursite.com/" "index.jpg"
