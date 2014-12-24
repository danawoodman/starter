# Starter

Start project for frontend applications using:

- **[Socket.io][socket-io]** - Feature rich, stable real-time WebSockets library.
- **[React][react]** - One way view rendering framework by Facebook.
    - **[Reflux][reflux]** - A simple library for uni-directional dataflow application architecture inspired by ReactJS Flux.
- **[Browserify][browserify]** - Allows CommonJS (`require('module')` style) imports in your frontend JavaScript code.
- **[Gulp][gulp]** - A lightning fast task runner.
- **[LESS][less]** - A CSS preprocessor with variables, functions, and tons of utilities to make writing CSS suck less.
- **[fb-flo][fb-flo]** for automatic reloading of your HTML, CSS and JavaScript code without refresh.
- **[Mocha][mocha]** - JavaScript test runner.
- **[Bower][bower]** - Front-end package management tool.
- **[Bootstrap][bootstrap]** - Front-end user interface library.
    - **[react-bootstrap][react-bootstrap]** - React components for common Bootstrap components.

Running the gulp scripts (see below), allows you to do some other awesome things like:

- Generate sourcemaps for you CSS and JavaScript.
- Automatically concatenate and minify your CSS and JavaScript.
- Run code linting on your JavaScript.
- Automatically run your test suite on any changes (with an awesome test runner to boot!).

## Screenshots

Customer listing:
![screen](http://cl.ly/Z5ON/Screen%20Shot%202014-12-23%20at%208.46.45%20PM.png)

## Setup

To get started, make sure you have [Node.js][node] installed and then run:

```bash
npm install -g gulp
```

[Gulp][gulp] is a task runner, similar to Grunt but with a more code driven approach to defining tasks. See the `gulpfile.js` for all the available tasks.

Next, copy the `.env.example` file over to `.env` and adjust the settings in it as needed. The `.env` file is loaded by Gulp to configure your environment.


## Usage

For local development, you'll most likely want to run the `watch` task:

```bash
gulp watch # or just "gulp" which is an alias to "gulp watch"
```

This will startup a webserver using [fb-flo][fb-flo], watch for changes to your JavaScript, HTML and LESS files and automatically rebuild them and run the Mocha test suite.

Try running `gulp watch` in one tab in your terminal program and then edit a LESS, HTML or JavaScript file and watch the page reload automatically. Sexy.

_**Note:** You'll need to install the [fb-flo browser extension][fb-flo-extension] for fb-flo to work. Make sure to have developers tools open with the flo extension enabled or it won't work properly._

## Testing

This project uses [Mocha][mocha] test runner and [should.js][should] assertion library for writing tests. See the `spec` folder for examples of testing the frontend and backend codebases.


## TODO

- [ ] Model/form validation (https://github.com/insin/newforms ?)
- [ ] Griddle tables
- [ ] Jest test suite
- [ ] Login component
- [ ] JSfmt
- [ ] WebPack/Ugilfy
- [ ] Auth (passport)
- [ ] Procfile
- [ ] Server rendering of React views


## Credits

Built by [Dana Woodman][dana] and the rest of the [BIG][big] team.

Credit also goes to the authors of all the amazing tools used in this project. Without people like them, we'd still be in the dark ages of technology.


## License

This source code is released under a liberal [MIT license][mit] (which means you can use it in commercial projects). See the `LICENSE` file for details.

[browserify]: http://browserify.org/
[react]: http://facebook.github.io/react/
[reflux]: https://github.com/spoike/refluxjs
[dana]: http://danawoodman.com/
[big]: http://builtbybig.com/
[mit]: http://opensource.org/licenses/MIT
[less]: http://lesscss.org/
[node]: http://nodejs.org/
[mocha]: http://mochajs.org/
[should]: https://github.com/shouldjs/should.js
[gulp]: http://gulpjs.com
[fb-flo]: https://github.com/facebook/fb-flo
[bower]: http://bower.io/
[mocha]: http://mochajs.org/
[fb-flo-extension]: https://chrome.google.com/webstore/detail/ahkfhobdidabddlalamkkiafpipdfchp
[bootstrap]: http://getbootstrap.com
[react-bootstrap]: http://react-bootstrap.github.io
[socket-io]: http://socket.io/
