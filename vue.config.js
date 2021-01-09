const path = require('path');
const resolve = filename => path.resolve(__dirname, filename);

module.exports = {
    publicPath: '/',
    outputDir: 'v-components',
    css: {
        loaderOptions: {
            stylus: {
                import: resolve('src/assets/styles/index.styl')
            }
        }
    }
};
