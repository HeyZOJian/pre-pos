'use strict';

function collectSameElements(collectionA, objectB) {
  var result = new Array();
  collectionA.forEach(elementA => {
    for(var index in objectB){
      objectB[index].forEach(elementB =>{
        if(elementA == elementB){
          result.push(elementA);
        }
      })
    }
  });
  return result;
}
