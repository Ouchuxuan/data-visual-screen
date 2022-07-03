const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          indentWidth: 4,
          includePaths: ['absolute/path/a', 'absolute/path/b'],
        },
      },
    },
  },
  babel: {
    presets: [],
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
      ],
    ],
    loaderOptions: {},
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@utils': resolve('src/utils'),
      '@styles': resolve('src/styles'),
      '@images': resolve('src/images'),
      '@store': resolve('src/store'),
    },
    plugins: [],
  },
};
