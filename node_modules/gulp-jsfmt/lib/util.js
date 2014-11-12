'use strict';

require('sugar');

exports.parseOpts = function (args, defaults) {
  var opts = defaults || {};
  if (args.length > 0 && typeof args[0] === 'object') {
    Object.merge(opts, args[0]);
    opts.patterns = [].slice.call(args, 1);
  } else {
    opts.patterns = [].slice.call(args);
  }
  if (opts.patterns.length === 1 && Array.isArray(opts.patterns[0])) {
    opts.patterns = opts.patterns[0];
  }

  return opts;
}