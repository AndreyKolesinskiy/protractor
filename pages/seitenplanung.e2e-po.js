module.exports = SeitenplanungPage;

function SeitenplanungPage() {
    var that = this;    

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    that.nod = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', '39, Frühling/Sommer 2015'));
    that.sub1 = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt'));
    that.sub2 = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', '3911 Schwarzpreis ET: 04.03.2016'));
    that.menuElement = element(by.partialLinkText('EINKAUF'));
    that.menuSubElement = element(by.partialLinkText('Seitenplanung'));
    that.saveButton = element(by.css('.glyphicon-file'));        
}