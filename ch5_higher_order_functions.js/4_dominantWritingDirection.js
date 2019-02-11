//********************** */SOLUTION STILL IN PROGRESS*********************
const SCRIPTS = require("./scripts");

function dominant(text) {
  let items = countBy(text, char => {
    let item = characterScript(char.codePointAt(0));
    return item ? item.name : "none";
  }).filter(({name}) => name != "none");

  let dominant = items.reduce((a, b) => {
    return a.count > b.count ? a.name : b.name;
  });

  return SCRIPTS.filter(item => item.name === dominant.name)[0].direction;
}

dominant("Hello!");

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



/*
//find script with largest number of characters
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));

//find script with given corresponding code
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

//charCodeAt method gives you a code unit, not a full character code. (gets you code units vs. real characters)

//codePointAt method, added later, does give a full Unicode character (get Unicode characters from string- preferred). Accepts an index 
//(loop through with for of since you might not know length of string, ie in other languages)



//count the characters that belong to each script
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

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]
*/