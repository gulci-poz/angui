"use strict";

angular.module("myApp.controllers", [])

    .controller("helloWorldCtrl", ["$scope", function ($scope) {

        // jeśli będziemy przekazywali dane ze $scope do izolowanego $scope w dyrektywie, to lepiej korzystać z obiektów zamiast z typów prymitywnych - będziemy przekazywali przez referencję, zamiast przez wartość

        $scope.person = {
            firstName: "John",
            lastName: "Doe",
            phone: "(999) 999-9999 ext 99"
        };

        // dla dowolnej cyfry - 9
        // dla dowolnej litery - A
        // cyfra lub litera - *
        // wszystko inne - ukryte
        $scope.mask = "(999) 999-9999 ext 99";

        // upiększony JSON
        // będziemy mieli łamanie wierszy i wcięcie na 2 znaki
        $scope.getModel = function () {
            return JSON.stringify($scope.person, undefined, 2);
        };
    }])

;
