const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/index'),
      '@theme': path.resolve(__dirname, 'src/assets/theme'),
    },
  },
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
};
