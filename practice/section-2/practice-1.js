'use strict';

function countSameElements(collection) {
  var result = new Array();
  for(var i = 0; i < collection.length;){
    result.push({key: collection[i],count: collection.lastIndexOf(collection[i])-collection.indexOf(collection[i])+1});
    i = collection.lastIndexOf(collection[i])+1;
  }
  return result;
}
