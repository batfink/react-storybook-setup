'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react');
var styled = _interopDefault(require('styled-components'));

var Foobar = styled.div.withConfig({
  displayName: "Barbar__Foobar",
  componentId: "sc-3a4mus-0"
})(["display:grid;grid-gap:0.25rem;font-weight:500;font-size:1.125rem;background:deeppink;color:lime;border:1px solid black;"]);

module.exports = Foobar;
