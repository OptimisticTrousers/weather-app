const path = require('path');

module.exports = {
  entry: ['./src/index.js', './src/modules/listeners.js', './src/modules/weatherDetails.js', './src/modules/overview.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
