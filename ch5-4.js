var SCRIPTS = require('/Users/yuhsinho/eloquent/scripts.js');
// Dominant writing direction

function dominantDirection(text) {
    let dir = [];
    for (i = 0; i < text.length; i ++) {
      let code = text.codePointAt(i);
      if (characterScript(code) && characterScript(code).direction) {
        dir.push(characterScript(code).direction);
      }  
    } 
    let array = countBy(dir, n => n == 'ltr');
    let result = array.reduce((a,b) => a.count > b.count ? a.name : b.name);
    if (result) return 'ltr'
    return 'rtl';
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl


  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }