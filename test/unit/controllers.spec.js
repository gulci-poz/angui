"use strict";

describe("controller specs", function () {

    var $scope;

    beforeEach(module("myApp.controllers"));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller("helloWorldCtrl", {
            $scope: $scope
        });
    }));

    it('should create "name" model with first name "John"', function () {
            expect($scope.person.firstName).toBe("John");
    });

});
