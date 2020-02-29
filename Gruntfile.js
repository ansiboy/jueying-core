const path = require("path");
const webpack_src = require('./webpack.config.js');
const webpack_components = Object.assign({}, webpack_src, {
    entry: path.join(__dirname, "out/components/index.js"),//已多次提及的唯一入口文件
    output: {
        path: __dirname,//打包后的文件存放的地方
        filename: "components.js",//打包后输出文件的文件名
        libraryTarget: 'umd',
    }
});
const webpack_decorators = Object.assign({}, webpack_src, {
    entry: path.join(__dirname, "out/decorators.js"),//已多次提及的唯一入口文件
    output: {
        path: __dirname,//打包后的文件存放的地方
        filename: "decorators.js",//打包后输出文件的文件名
        libraryTarget: 'umd',
    }
});
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        shell: {
            src: {
                command: `tsc -p src`
            }
        },
        webpack: {
            webpack_src,
            webpack_components,
            webpack_decorators,
        },
    });
    
    grunt.registerTask('default', ['shell', 'webpack']);
}
