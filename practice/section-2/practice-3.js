'use strict';

function countSameElements(collection) {
  var result = new Array();
  var mark = new Set();
  for (var i = 0; i < collection.length; i++) {
    var match = collection[i][0];
    if (mark.has(match)) continue;
    var num = 0;
    for (var j = 0; j < collection.length; j++) {
      console.log(element);
      var element = collection[j];
      if (element[0] == match[0]) {
        var a = parseInt(element.replace(/[^0-9]/ig, ""));
        if (a) {
          num += a;
        } else {
          num++;
        }
      }
    }
    result.push({
      name: match,
      summary: num
    });
    mark.add(match);
  }
  return result;
}

function getCharAndNum(element, t) {
  var num = parseInt(element.substr(element.indexOf('-') + 1, element.length));
  return num;
}
