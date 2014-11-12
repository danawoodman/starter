'use strict';

var util = require('../lib/util');

describe('util', function () {
  describe('parseOpts', function () {
    it('should accept first item in `args` as `opts` if it is an object', function () {
      util.parseOpts([{
        aTest: 'aTest'
      }], {
        aDefault: 'aDefault'
      }).should.eql({
        aTest: 'aTest',
        aDefault: 'aDefault',
        patterns: []
      });
    });

    it('should accept patterns in an array as the second item in args', function () {
      util.parseOpts([{
        aTest: 'aTest'
      }, [
        'a -> a'
      ]], {
        aDefault: 'aDefault'
      }).should.eql({
        aTest: 'aTest',
        aDefault: 'aDefault',
        patterns: [
          'a -> a'
        ]
      });
    });

    it('should accept patterns as argument list in args', function () {
      util.parseOpts([{
        aTest: 'aTest'
      },
      'a -> a',
      'b -> b'
      ], {
        aDefault: 'aDefault'
      }).should.eql({
        aTest: 'aTest',
        aDefault: 'aDefault',
        patterns: [
          'a -> a',
          'b -> b'
        ]
      });
    });

    it('should allow missing optional `defaults`', function () {
      util.parseOpts([{
        aTest: 'aTest'
      },
      'a -> a',
      'b -> b'
      ]).should.eql({
        aTest: 'aTest',
        patterns: [
          'a -> a',
          'b -> b'
        ]
      });
    });

    it('should allow missing optional `opts` in `args`', function () {
      util.parseOpts([
      'a -> a',
      'b -> b'
      ], {
        aDefault: 'aDefault'
      }).should.eql({
        aDefault: 'aDefault',
        patterns: [
          'a -> a',
          'b -> b'
        ]
      });
    });
  });
});
