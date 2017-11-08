var ApiPage = require('./pages/api.e2e-po.js');

describe('angularjs api page, link in sub element of menu', function() {
    var page = new ApiPage();

    beforeEach(function(){
        browser.get('https://angular.io/api');
    });

    it('should not present link', function() {
        page.openSubElementOfList('Techniques', 'Setup & Deployment');
        page.techniquesButton.click();
        page.techniquesButton.click();

        expect(page.setupForLocalDevLink.isPresent()).toEqual(false);
    });
});