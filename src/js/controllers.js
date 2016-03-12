"use strict";

angular.module("myApp.controllers", [])

    .controller("helloWorldCtrl", ["$scope", "$timeout", function ($scope, $timeout) {

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
        // wykorzystamy ten string w dyrektywie ui-mask
        $scope.mask = "(999) 999-9999 ext 99";

        // upiększony JSON
        // będziemy mieli łamanie wierszy i wcięcie na 2 znaki
        $scope.getModel = function () {
            return JSON.stringify($scope.person, undefined, 2);
        };

        // zestaw kolorów i indeks aktywnego koloru
        var colors = [
            "#CCC",
            "#F77",
            "#9F9"
        ];
        var activeColor = 0;

        // tworzenie obiektu stylu
        // funkcja potrzebna callbakom dla ustawienia ng-style na elemencie pokazująym model (pre, używamy tam getModel())
        $scope.modelStatus = function () {
            return {
                backgroundColor: colors[activeColor]
            };
        };

        // callbaki dla zdarzeń; w blur na chwilę będzie zielony - na znak zakończenia edycji danych; blur - przeciwieństwo focus
        // callbaki wykorzystamy w dyrektywie ui-event
        $scope.focusCallback = function () {
            activeColor = 1;
        };

        $scope.blurCallback = function () {
            // zielony
            activeColor = 2;

            // po dwóch sekundach szary
            $timeout(function () {
                activeColor = 0;
            }, 2000);
        };

        // używamy f2, f1 wywołuje też pomoc chrome
        // id elementu wywołującego zdarzenie mamy w $event - srcElement lub target (pole id); dodałem też etykietę w global data-* attribute data-label, odwołanie w JS za pomocą dataset

        $scope.helpKeyDown = function ($event) {
            //console.log($event.srcElement.dataset.label);
            //console.log($event.target.dataset.label);

            $scope.helpText = "Just enter your " + $event.srcElement.dataset.label + ".";

            // po 10 sekundach czyścimy podpowiedź, ng-show sprawdza "prawdziwość" stringa - jeśli pusty, to dostajemy false i element nie będzie dłużej pokazywany
            $timeout(function () {
                $scope.helpText = "";
            }, 10000);
        };
    }])

;
