module.exports = ApiPage;

function ApiPage() {
    this.techniquesButton = element(by.partialButtonText('Techniques'));    
    this.setupForLocalDevLink = element(by.partialLinkText('Setup for local development'));

    this.openSubElementOfList = function (mainElementText, subElementText) {
        element(by.partialButtonText(mainElementText)).click();
        element(by.partialButtonText(subElementText)).click();
    };
}