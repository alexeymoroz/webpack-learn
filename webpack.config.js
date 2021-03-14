const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'myscript.js'
    },
    mode: 'development'
}

console.log('PATH:', path.resolve(__dirname, 'dist'))

