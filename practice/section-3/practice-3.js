'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var countArray = new Array();
  for(var i = 0; i < collectionA.length;){
    countArray.push({key: collectionA[i],count: collectionA.lastIndexOf(collectionA[i])-collectionA.indexOf(collectionA[i])+1});
    i = collectionA.lastIndexOf(collectionA[i])+1;
  }
  var result = new Array();
  countArray.forEach(elementA => {
    var flag = false;
    objectB.value.forEach(elementB => {
      if (elementA.key == elementB) {
        result.push({
          key: elementA.key,
          count: parseInt(elementA.count - parseInt(elementA.count/3))
        });
        flag = true;
      }
    });
    if (flag == false) {
      result.push(elementA);
    }
  });
  return result;
}
