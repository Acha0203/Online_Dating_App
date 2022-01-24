module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath:
    process.env.NODE_ENV === 'production' ? '/Online_Dating_App/' : '/',
  transpileDependencies: ['vuetify'],
};
