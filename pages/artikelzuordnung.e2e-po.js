module.exports = ArtikelzuordnungPage;

function ArtikelzuordnungPage() {
    var that = this;    

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
    
}