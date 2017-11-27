module.exports = new PublicationTree();

function PublicationTree() {
    var that = this;

    that.getNodeElementByLevelNumberAndValue = function (levelNumber, value)  {
        switch (levelNumber) {
            case('level0') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeText', value));
                break;
            case('level1') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel0 .aciTreeText', value));
                break;
            case('level2') :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel1 .aciTreeText', value));
                break;
        }
    }
}