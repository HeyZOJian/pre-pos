'use strict';

function collectSameElements(collectionA, objectB) {
  var result = new Array();
  collectionA.forEach(elementA => {
    console.log(elementA.key);
    for(var index in objectB){
      objectB[index].forEach(elementB => {
        if(elementA.key == elementB){
          result.push(elementB);
        }
      })
    }
  });
  return result;
}