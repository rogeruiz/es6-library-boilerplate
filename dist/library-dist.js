(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["underscore"], factory);
  } else if (typeof exports !== "undefined") {
    var _ = require("underscore");
    module.exports = factory(_);
  } else {
    root.MyLibrary = factory(root._);
  }
})(this, function (_) {
  "use strict";

  //
  // Always be sure to define variables.
  // Never export directly, as 6to5 strips
  // all import and export lines.
  //

  var Another = {
    anotherFn: function () {
      return "ok";
    }
  };

  var _MyLibrary = {
    anotherFn: Another.anotherFn,
    mainFn: function mainFn() {
      return "hello";
    },
    each: _.each
  };




  return _MyLibrary;
});


// Place your library's code here
//
// If you add additional files, be sure to
// load them in order in ./wrapper.js
//
//# sourceMappingURL=library-dist.js.map