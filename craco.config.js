const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src/*': path.resolve(__dirname, 'src'),
      '@src/': path.resolve(__dirname, 'src'),
      '@assets/*': path.resolve(__dirname, 'src/assets'),
      '@assets/': path.resolve(__dirname, 'src/assets'),
      '@icons/*': path.resolve(__dirname, 'src/assets/icons'),
      '@icons/': path.resolve(__dirname, 'src/assets/icons'),
      '@svgs/*': path.resolve(__dirname, 'src/assets/svgs'),
      '@svgs/': path.resolve(__dirname, 'src/assets/svgs'),
      '@theme/*': path.resolve(__dirname, 'src/assets/theme'),
      '@theme/': path.resolve(__dirname, 'src/assets/theme'),
    },
  },
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
};
