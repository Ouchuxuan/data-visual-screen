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
    plugins: [],
    loaderOptions: {},
  },
};
