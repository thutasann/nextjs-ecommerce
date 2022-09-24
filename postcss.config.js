const path = require('path');
const resolver = require('postcss-import-alias-resolver');
const options = {
    base : path.resolve(__dirname, 'src'),
    alias: {
        '@styles': path.resolve(__dirname, 'src'),
    },
    extensions: ['.css'],
    modules: ['src', 'node_modules'],
    dontPrefix: true, 
}

module.exports = {
    plugins: {
        'postcss-import': {
        resolve: resolver(options) 
        },
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {},
        autoprefixer: {},
    }
}
