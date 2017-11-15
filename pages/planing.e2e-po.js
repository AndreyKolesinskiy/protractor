module.exports = PlaningPage;

function PlaningPage() {
    var that = this;    

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));    
    that.menuElement = element(by.partialLinkText('EINKAUF'));
    that.menuSubElement = element(by.partialLinkText('Seitenplanung'));
    that.saveButton = element(by.css('.glyphicon-file'));
}