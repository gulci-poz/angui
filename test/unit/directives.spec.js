"use strict";

describe("directive specs", function () {

    var $scope;

    beforeEach(module("myApp.directives"));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
        $scope.name = {
            firstname: "John",
            lastname: "Doe"
        };
    }));

    describe("hello-world", function () {
        it("should contain the provided name", function () {
            inject(function ($compile) {
                var element = $compile('<div helo-world hello-name="name"</div>')($scope);
                $scope.$digest();
                expect(element.html()).toContain("John");
            });
        });
    });

});
