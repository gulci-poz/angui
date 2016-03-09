"use strict";

angular.module("myApp.controllers", [])

    .controller("helloWorldCtrl", ["$scope", function ($scope) {

        // jeśli będziemy przekazywali dane ze $scope do izolowanego $scope w dyrektywie, to lepiej korzystać z obiektów zamiast z typów prymitywnych - będziemy przekazywali przez referencję, zamiast przez wartość

        $scope.name = {
            firstname: "John",
            lastname: "Doe"
        };
    }])

;
