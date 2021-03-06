describe("hello world app", function () {

    it("should have a title", function () {
        browser.get("http://localhost:8000/src/");
        expect(browser.getTitle()).toEqual("angui");
    });

});

describe("name fields", function () {
    it("should be filled out and editable", function () {

        browser.get("http://localhost:8000/src/");

        var h1 = element.all(by.css("h1")).first();
        var fname = element.all(by.tagName("input")).first();
        var lname = element.all(by.tagName("input")).get(1);

        expect(h1.getText()).toEqual("Hello John Doe!");
        expect(fname.getAttribute("value")).toEqual("John");
        expect(lname.getAttribute("value")).toEqual("Doe");

        fname.clear().sendKeys("Peter");
        lname.clear().sendKeys("Smith");

        expect(h1.getText()).toEqual("Hello Peter Smith!");
        expect(fname.getAttribute("value")).toEqual("Peter");
        expect(lname.getAttribute("value")).toEqual("Smith");

    });
});
