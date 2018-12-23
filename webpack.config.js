const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'raidencashcoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'raidencashcore-mnemonic.js'
  }
};
