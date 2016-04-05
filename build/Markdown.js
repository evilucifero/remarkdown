'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

require('../style/monokai.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var highlight = function highlight(code, lang) {
  if (lang) {
    return _highlight2.default.highlightAuto(code, [lang]).value;
  }
  return _highlight2.default.highlightAuto(code).value;
};

function Markdown(props) {
  var md = props.md;

  var markedHtml = (0, _marked2.default)(md, { highlight: highlight });

  return _react2.default.createElement('div', {
    className: 'remarkdown-container hljs',
    dangerouslySetInnerHTML: { __html: markedHtml }
  });
}

Markdown.propTypes = {
  md: _react.PropTypes.string
};

Markdown.defaultProps = {
  md: ''
};

exports.default = Markdown;