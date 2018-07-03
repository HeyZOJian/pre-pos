'use strict';

function countSameElements(collection) {
  var result = new Array();
  for(var i = 0; i < collection.length;){
    if(collection[i].indexOf('-')>0){
      result.push({key: collection[i].substr(0,collection[i].indexOf('-')), 
      count: parseInt(collection[i].substr(collection[i].indexOf('-')+1, collection[i].length))});
      i++;
      continue;
    }
    result.push({key: collection[i],count: collection.lastIndexOf(collection[i])-collection.indexOf(collection[i])+1});
    i = collection.lastIndexOf(collection[i])+1;
  }
  return result;
}
