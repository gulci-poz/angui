module.exports = function (grunt) {

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON("package.json"),
            concat: {
                options: {
                    separator: ";"
                },
                dist: {
                    src: [
                        "src/bower_components/angular/angular.min.js",
                        "src/bower_components/angular-ui-event/dist/event.min.js",
                        "src/bower_components/angular-ui-indeterminate/dist/indeterminate.min.js",
                        "src/bower_components/angular-ui-mask/dist/mask.min.js",
                        "src/bower_components/angular-ui-scroll/dist/ui-scroll.min.js",
                        "src/bower_components/angular-ui-scrollpoint/dist/scrollpoint.min.js",
                        "src/bower_components/angular-ui-uploader/dist/uploader.min.js",
                        "src/bower_components/angular-ui-validate/dist/validate.min.js",
                        "src/js/app.js",
                        "src/js/controllers.js",
                        "src/js/directives.js"
                    ],
                    dest: "dist/js/<%= pkg.name %>.js"
                }
            },
            copy: {
                main: {
                    files: [
                        {
                            src: "src/bower_components/bootstrap/dist/css/bootstrap.min.css",
                            dest: "dist/css/bootstrap.min.css"
                        },
                        {
                            expand: true,
                            cwd: "src/css/",
                            src: [
                                "**"
                            ],
                            dest: "dist/css/"
                        }
                    ]
                }
            },
            targethtml: {
                dist: {
                    files: {
                        "dist/index.html": "src/index.html"
                    }
                }
            },
            karma: {
                unit: {
                    configFile: "conf/karma.conf.js",
                    singleRun: true
                }
            },
            protractor: {
                e2e: {
                    options: {
                        configFile: "conf/protractor.conf.js"
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-targethtml");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-protractor-runner");
    grunt.registerTask("dist", ["karma", "protractor", "concat", "targethtml", "copy"]);

};
