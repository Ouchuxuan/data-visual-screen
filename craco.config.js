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
    alias: {},
    plugins: [],
  },
};
