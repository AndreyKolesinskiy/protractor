var ApiPage = require('./pages/api.pageObject.js');

describe('angularjs api page, multilevel list component', function() {

    var page;
    beforeEach(function () {
        page = new ApiPage();
    });
    
    it('dont have entered element in list', function() {
        page.techniquesButtonClick();
        page.setupDeploymentButtonClick();
        page.techniquesButtonClick();

        expect(page.setupForLocalDevLink.isPresent()).toEqual(false);
    });
});