var fs = require('fs');
var system = require('system');
var page = require('webpage').create();

var args = system.args;
var url = args[1] || 'http://yoursite.com/';
var file = args[2] || 'index.jpg';
var width = args[3] || 1366;

var time = new Date();
var ds = '/';
var path = ds + 'home' + ds + 'user' + ds + 'image-diff' + ds;

path += 'image-diff/';
fs.makeDirectory(path);

path += time.getFullYear() + ds;
fs.makeDirectory(path);

path += ((time.getMonth()+1) < 10 ? "0" + (time.getMonth()+1) : (time.getMonth()+1) ) + ds;
fs.makeDirectory(path);

path += time.getDate() + ds;
fs.makeDirectory(path);

path += width + ds;
fs.makeDirectory(path);

path += file;

page.viewportSize = {
	width: width,
	height: 768
};

page.open(url, function() {
	console.log("url: " + url + ", path: " + path + ", width: " + width);

	page.render(path, {
		format: 'jpeg',
		quality: '85'
	});

	phantom.exit();
});
