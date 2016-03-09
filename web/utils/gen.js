var fs = require('fs');
var path = require('path');

// grap the options
var args = process.argv.slice(2);

// check to see if they need help before we do anything else.
help(args);

var NAME = getName(args); // component name
var TYPE = getType(args); // component type
var COMPONENTS_ROOT = path.resolve(__dirname, '../components'); // the folder root for componets
var NEW_COMPONENT = path.join(COMPONENTS_ROOT, TYPE, NAME); // the new component path

// parse the type option
function getType(args) {
  var index;
  var type;

  args.forEach(function (arg, i) {
    if (arg === '-t' || arg === '--type') {
      index = i + 1;
    }
  });

  type = args.slice(index, index + 1)[0];

  return type || 'dumb';
}

// parse the name option
function getName(args) {
  var index;
  var name;

  args.forEach(function (arg, i) {
    if (arg === '-n' || arg === '--name') {
      index = i + 1;
    }
  });

  name = args.slice(index, index + 1)[0];

  if (name) {
    return name;
  } else {
    console.error('Missing name argument.');
    process.exit();
  }
}

// help option output
function help(args) {
  if (args.indexOf('-h') >= 0 || args.indexOf('--help') >= 0) {
    console.log('Usage: npm run gen -- [options]');
    console.log('');
    console.log('A tool for generating component boiler plate.');
    console.log('');
    console.log('Options:');
    console.log('');
    console.log('-h, --help   output usage information');
    console.log('-n, --name   name of the component [required]');
    console.log('-t, --type   type of component [defaults to dumb]');
    console.log('');
    process.exit();
  }
}

// index.js template
function template(name) {
  return `import React, {Component} from 'react';

import styles from './${name}.scss';

export default class ${name} extends Component {
  render() {
    return  (
      <div/>
    );
  }
}
  `;
}

// make the component dir
fs.mkdir(NEW_COMPONENT, function (err) {
  if (err) {
    console.error('Component already exists.');
    process.exit();
  }

  // make component index.js file
  fs.writeFile(NEW_COMPONENT + '/index.js', template(NAME), function (err) {
    if (err) {
      console.error('Something happened.');
      process.exit();
    }

    // make component scss file
    fs.writeFile(NEW_COMPONENT + '/' + NAME +'.scss', '', function (err) {
      if (err) {
        console.error('Something happened.');
        process.exit();
      }

      console.log('New component created at ' + NEW_COMPONENT);
    });
  });
});
