var ApiPage = function() {

    this.techniquesButton = element(by.partialButtonText('Techniques'));
    this.setupDeploymentButton = element(by.partialButtonText('Setup & Deployment'));
    this.setupForLocalDevLink = element(by.partialLinkText('Setup for local development'));

    browser.get('https://angular.io/api');

    this.techniquesButtonClick = function () {
        this.techniquesButton.click();
    };

    this.setupDeploymentButtonClick = function () {
        this.setupDeploymentButton.click();
    };

};

module.exports = ApiPage;