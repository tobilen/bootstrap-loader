'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (module, bootstrapVersion, bootstrapPath) {
  var scriptsPath;
  switch (bootstrapVersion) {
    case "4.0.0-alpha.5":
      scriptsPath = ['js', 'dist'];
      break;
    case "4":
      scriptsPath = ['dist', 'js', 'umd'];
      break;
    case "3":
      scriptsPath = ['assets', 'javascripts', 'bootstrap'];
      break;
  }
  var bootstrapModule = _path2.default.join.apply(_path2.default, [bootstrapPath].concat(_toConsumableArray(scriptsPath), [module]));
  return 'require (' + JSON.stringify(bootstrapModule) + ');';
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Creates Node require string for Bootstrap module
 *
 * @param {string} module
 * @param {number} bootstrapVersion
 * @param {string} bootstrapPath
 * @returns {string}
 */