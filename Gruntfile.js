const webpack_src = require('./webpack.config.js');
let webpack_min = Object.assign({}, webpack_src, {
    output: Object.assign({}, webpack_src.output, { filename: "index.min.js" }),
    mode: 'production',
})

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
    fs.writeFileSync("package.json", data, "utf8");
};
modifyVersion();


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
            webpack_min,
        },
    });

    grunt.registerTask('default', ['shell', 'webpack']);
}

