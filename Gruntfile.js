const webpack_src = require('./webpack.config.js');


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
            // webpack_components,
            // webpack_decorators,
        },
    });

    grunt.registerTask('default', ['shell', 'webpack']);
}

function modifyVersion() {
    const package = require("./package.json");
    const path = require("path");

    let version = package.version || "1.0.0";
    let arr = version.split(".");
    arr[arr.length - 1] = (Number.parseInt(arr[arr.length - 1]) + 1).toString();
    version = arr.join(".");
    package.version = version;

    const fs = require('fs');
    let data = JSON.stringify(package, null, 4);
    fs.writeFile("package.json", data, "utf8", (err => {
        console.log(err)
    }));
};
modifyVersion();
