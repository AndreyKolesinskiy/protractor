module.exports = ApiPage;

function ApiPage() {
    var that = this;

    that.techniquesButton = element(by.partialButtonText('Techniques'));
    that.setupForLocalDevLink = element(by.partialLinkText('Setup for local development'));

    that.openSubElementOfList = function (mainElementText, subElementText) {
        element(by.partialButtonText(mainElementText)).click();
        element(by.partialButtonText(subElementText)).click();
    };
}