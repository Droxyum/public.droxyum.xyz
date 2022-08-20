const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: "development",
    externals: [nodeExternals()], // Retirer les node_modules du bundle final
    entry: './build/index.js', // Entry point nodejs 
    output: {
        path: path.join(__dirname, 'dist'), // Destination
        filename: 'bundle.js',
    }
}