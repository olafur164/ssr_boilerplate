'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Home = require('../../containers/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Students = require('../../containers/Students');

var _Students2 = _interopRequireDefault(_Students);

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run `yarn run compile-routes` after altering any Routes in this file.
 *
 * CompiledRoutes.js is the transpiled version of this file
 * which gets used when the app renders on the server.
 */

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/students', component: _Students2.default }),
    _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
  );
};

exports.default = Routes;
