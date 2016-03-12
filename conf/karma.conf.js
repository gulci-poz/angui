module.exports = function (config) {

    config.set({

        basePath: "../",
        files: [
            "src/bower_components/angular/angular.min.js",

            "src/bower_components/angular-ui-event/dist/event.min.js",
            "src/bower_components/angular-ui-indeterminate/dist/indeterminate.min.js",
            "src/bower_components/angular-ui-mask/dist/mask.min.js",
            "src/bower_components/angular-ui-scroll/dist/ui-scroll.min.js",
            "src/bower_components/angular-ui-scrollpoint/dist/scrollpoint.min.js",
            "src/bower_components/angular-ui-uploader/dist/uploader.min.js",
            "src/bower_components/angular-ui-validate/dist/validate.min.js",

            "src/bower_components/angular-mocks/angular-mocks.js",
            "node_modules/angular-ui-utils/modules/keypress/keypress.js",
            "src/js/**/*.js",
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
