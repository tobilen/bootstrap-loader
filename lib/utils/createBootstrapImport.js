'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (module, bootstrapVersion, bootstrapPath) {
  var stylesPath = _semver2.default.major(bootstrapVersion) === 3 ? ['assets', 'stylesheets', 'bootstrap'] : ['scss'];
  var bootstrapModule = _path2.default.join.apply(_path2.default, [bootstrapPath].concat(stylesPath, ['_' + module]));
  return '@import "' + bootstrapModule + '";';
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }