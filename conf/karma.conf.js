module.exports = function (config) {

    config.set({

        basePath: "../",
        files: [
            "src/bower_components/angular/angular.min.js",
            "src/bower_components/angular-mocks/angular-mocks.js",
            "src/js/**/.js",
            "test/unit/**/*.js"
        ],
        autoWatch: true,
        frameworks: [
            "jasmine"
        ],
        browsers: [
            "Chrome",
            "Firefox"
        ],
        plugins: [
            "karma-chrome-launcher",
            "karma-firefox-launcher",
            "karma-jasmine"
        ]
    });

};
