module.exports = MainMenu;

function MainMenu(data) {
    var that = this;
    that.data = data;

    that.menuElement = element(by.partialLinkText(data.menuElement));
    that.menuSubElement = element(by.partialLinkText(data.menuSubElement));

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.seasonsMenuSubElement = element(by.partialLinkText(data.seasonsMenuSubElement));
    that.privilegesMenuSubElement = element(by.partialLinkText(data.privilegesMenuSubElement));
}