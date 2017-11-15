module.exports = ArtikelzuordnungPage;

function ArtikelzuordnungPage() {
    var that = this;    

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    that.nod = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', '39, Frühling/Sommer 2015'));
    that.sub1 = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', 'Inszenierungspunkt'));
    that.sub2 = element(by.tagName('body')).element(by.cssContainingText('.aciTreeText', '3911 Schwarzpreis ET: 04.03.2016'));
    that.menuElement = element(by.partialLinkText('EINKAUF'));
    that.menuSubElement = element(by.partialLinkText('Artikelzuordnung'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.publicationPart = element(by.model('item.publicationPart'));
    that.page = element(by.model('item.page'));
    that.okButton = element(by.buttonText('Anlegen'));
    that.addedElement = element(by.tagName('body')).all(by.css('.htAutocomplete.current')).last();
    that.eshopNumber = element.all(by.repeater('tab in tabs')).first().element(by.css('.input-sm.form-control'));
    that.undoButton = element(by.css('.fa-undo'));
}