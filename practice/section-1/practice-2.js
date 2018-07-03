'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = new Array();
  collectionA.forEach(elementA => {
    collectionB[0].forEach(elementB => {
      if(elementA==elementB){
        result.push(elementA);
      }
    })
  });
  return result;
}
