module.exports = {
  presets: [
    'babel-preset-solid',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs'],
};
