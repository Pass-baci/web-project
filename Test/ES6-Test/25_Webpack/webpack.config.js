const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: './src/index.js',
    search: './src/search'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};