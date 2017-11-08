module.exports = ProductionsPage;

function ProductionsPage() {
    var that = this;

    that.productionsMenuElement = element(by.partialLinkText('Publikationspflege'));
    that.title = element(by.binding('applicationTitle'));
}