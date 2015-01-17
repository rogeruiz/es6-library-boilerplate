var setup = require('./setup');
var config = require('../../config');

global._ = require('underscore');
global[config.exportVarName] = require('../../tmp/__entry');
global.mocha.setup('bdd');
global.onload = function() {
  global.mocha.checkLeaks();
  global.mocha.globals(['stub', 'spy', 'expect']);
  global.mocha.run();
  setup();
};
