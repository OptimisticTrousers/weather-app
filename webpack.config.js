const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/modules/dom.js', './src/modules/info.js', './src/modules/overview.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
