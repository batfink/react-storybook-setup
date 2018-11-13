'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

var Foobar = styled.div.withConfig({
  displayName: "Barbar__Foobar",
  componentId: "sc-3a4mus-0"
})(["display:grid;grid-gap:0.25rem;font-weight:500;font-size:1.125rem;background:deeppink;color:lime;border:1px solid black;"]);

var Foobar$1 = styled.div.withConfig({
  displayName: "Foobar",
  componentId: "jdw10h-0"
})(["display:grid;grid-gap:0.25rem;font-weight:500;font-size:1.125rem;background:deeppink;color:lime;border:1px solid black;"]);
var Foobar$2 = React.createElement(Foobar$1, null, React.createElement(Foobar, null, children));

module.exports = Foobar$2;
