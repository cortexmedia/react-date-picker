'use strict';

var entry = require('./entry')

module.exports = {
    entry: entry,
    output: {
        path         : __dirname + '/../dist',
        libraryTarget: 'umd',
        library      : 'DatePicker',
        filename     : require('../DIST_FILE_NAME') + '.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    }
}