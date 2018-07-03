'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  collectionA.forEach(elementA => {
    collectionB.forEach(elementB => {
      if(elementA==elementB){
        result.push(elementA);
      }
    });
  });
  return result;
}