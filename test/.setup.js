var path = require('path');
var nodeSass = require('node-sass');

require('ignore-styles').default(['.jpeg', '.jpg', '.gif', '.png', '.svg']);
require('babel-register')();
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]',
  preprocessCss: function (css, filename) {
    return nodeSass.renderSync({
      data: css,
      includePaths: [path.join(__dirname, '..', '/web/scss')]
    }).css;
  }
});

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
