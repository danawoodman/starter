var jsdom = require('jsdom');
//var document = jsdom('hello world');
//global.window = document.parentWindow;
//global.document = global.window.document;

//if (typeof document !== 'undefined') { return; }
//var jsdom = require("jsdom").jsdom;
//global.document = jsdom('<html><body></body></html>');
var document = jsdom.jsdom('<html><body></body></html>', jsdom.level(1, 'core'));

beforeEach(function () {
    global.document = document;
    global.window = document.parentWindow;
    global.navigator = global.navigator;
});
