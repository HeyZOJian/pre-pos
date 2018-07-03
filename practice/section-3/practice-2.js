'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = new Array();
  collectionA.forEach(elementA => {
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
