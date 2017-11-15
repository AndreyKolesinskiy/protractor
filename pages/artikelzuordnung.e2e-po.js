module.exports = ArtikelzuordnungPage;

function ArtikelzuordnungPage() {
    var that = this;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
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