module.exports = MainMenu;

function MainMenu(data) {
    var that = this;
    that.data = data;

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.menuElement = element(by.partialLinkText(data.menuElement));
    that.menuSubElement = element(by.partialLinkText(data.menuSubElement));

    that.seasonsMenuSubElement = element(by.partialLinkText(data.seasonsMenuSubElement));
    that.privilegesMenuSubElement = element(by.partialLinkText(data.privilegesMenuSubElement));
    that.menuElement = element(by.partialLinkText(data.menuElement));

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
    that.menuElement = element(by.partialLinkText(data.menuElement));
    that.menuSubElement = element(by.partialLinkText(data.menuSubElement));

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));

    that.productionsMenuElement = element(by.partialLinkText(data.productionsMenuElement));
}