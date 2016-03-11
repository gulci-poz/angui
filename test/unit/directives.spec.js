"use strict";

describe("directive specs", function () {

    var $scope;

    // jeśli chciałbym testować dyrektywę z pliku HTML, to musiałbym użyć obiektu $httpBackend, na razie nie wiem jak to zrobić

    beforeEach(module("myApp.directives"));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
        $scope.person = {
            firstName: "John",
            lastName: "Doe"
        };
    }));

    describe("hello-world", function () {
        it("should contain the provided name", function () {
            inject(function ($compile) {
                var element = $compile('<div hello-world hello-name="person"></div>')($scope);
                $scope.$digest();
                expect(element.html()).toContain("John");
            });
        });
    });

});
