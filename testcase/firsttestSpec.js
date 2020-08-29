describe("Mysuite", function() {

    it("validate URL", function() {
      browser.get('https://angularjs.org/');
      browser.sleep(3000);
      browser.manage().window().maximize();
      expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    
    });

it("validate title of the page", function() {
      browser.get('https://angularjs.org/');
      browser.sleep(3000);
      browser.manage().window().maximize();
      expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    
    });


  });