'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react');
var styled = _interopDefault(require('styled-components'));

var Foobar = styled.div.withConfig({
  displayName: "Foobar",
  componentId: "jdw10h-0"
})(["display:grid;grid-gap:0.25rem;font-weight:500;font-size:1.125rem;.baz{background:orange;}"]);

module.exports = Foobar;
