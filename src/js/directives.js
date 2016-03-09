"use strict";

angular.module("myApp.directives", [])

    .directive("helloWorld", function () {
        return {
            restrict: "AE",

            // adres musi być z poziomu strony html, na której jest wczytywana dyrektywa
            templateUrl: "directives/helloWorld.html",

            // można też explicite "=helloName", przydatne jeśli posługujemy się inną nazwą obiektu, np. helloNameSpecial: "=helloName"
            scope: {
                helloName: "="
            }
        };
    })

;
