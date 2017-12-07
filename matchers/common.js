"use strict";

module.exports = Matchers;

function Matchers (){
    jasmine.addMatchers({
        toEqualPublicationData: function () {
            return {
                compare: function(publication, publicationData){
                    var eq = publication.number.getAttribute('value')
                            .then(function (value) {
                                return (value === publicationData.number);
                            }) &&
                        publication.type.getAttribute('value')
                            .then(function (value) {
                                return (value === publicationData.type);
                            }) &&
                        publication.date.getAttribute('value')
                            .then(function (value) {
                                return (value === publicationData.date);
                            })  &&
                        publication.price.getAttribute('value')
                            .then(function (value) {
                                return (value === publicationData.price);
                            });

                    var result = { pass: eq };

                    if(result.pass) {
                        result.message =  "Equal " + publicationData.number;
                    } else {
                        result.message =  "NOT Equal " + publicationData.number;
                    }
                    return result;
                }
            }
        }
    })
}