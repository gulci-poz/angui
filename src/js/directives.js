"use strict";

angular.module("myApp.directives", [])

    .directive("helloWorld", function () {
        return {
            restrict: "AE",

            // adres musi być z poziomu strony html, na której jest wczytywana dyrektywa
            //templateUrl: "directives/helloWorld.html",

            // na potrzeby testu dyrektywy na tym etapie, korzystam z template zamiast osobnego pliku HTML i templateUrl
            template : '<h1>Hello {{ helloName.firstName }} {{helloName.lastName }}!</h1>Firstname: <input type="text" data-ng-model="helloName.firstName" /><br />LastName: <input type="text" data-ng-model="helloName.lastName" />',

            // można też explicite "=helloName", przydatne jeśli posługujemy się inną nazwą obiektu, np. helloNameSpecial: "=helloName"
            scope: {
                helloName: "="
            }
        };
    })

;
