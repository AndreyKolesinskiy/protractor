module.exports = new PublicationTree();

function PublicationTree() {
    var that = this;

    that.getNodeElementByLevelNumberAndValue = function (levelNumber, value)  {
        switch (levelNumber) {
            case(0) :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeText', value));
                break;
            case(1) :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel0 .aciTreeText', value));
                break;
            case(2) :
                return element(by.tagName('body'))
                    .element(by.cssContainingText('.aciTreeLevel1 .aciTreeText', value));
                break;
        }
    }
}