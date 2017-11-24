module.exports = MainMenu;

function MainMenu(data) {
    var that = this;
    that.data = data;

    that.menuElement = element(by.partialLinkText(data.menuElement));

    that.pageMenuSubElement = element(by.partialLinkText(data.pageMenuSubElement));
    that.articleMenuSubElement = element(by.partialLinkText(data.articleMenuSubElement));
    that.productionsMenuSubElement = element(by.partialLinkText(data.productionsMenuSubElement));
    that.seasonsMenuSubElement = element(by.partialLinkText(data.seasonsMenuSubElement));
    that.privilegesMenuSubElement = element(by.partialLinkText(data.privilegesMenuSubElement));
}