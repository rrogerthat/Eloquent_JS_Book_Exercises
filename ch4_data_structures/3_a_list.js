function arrayToList(arr) {
    let rest = {};
    let list = {};

    for (let i = arr.length - 1; i >= 0; i--) {
        if (rest.value === undefined) {
                rest.value = arr[i];
                rest.rest = null;
        }
        else if (i === 0) {
            list.value = arr[i];
            list.rest = rest;
        }
        else rest = {
            value: arr[i],
            rest: rest
        }
    }
    return list;
}


let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
};

function listToArray(list) {
    let arr = [];
    //ends when node === null. Also works if second argument is just "node" as null means false so for loops stops, otherwise true
    for (let node = list; node !== null; node = node.rest) {     
        arr.push(node.value);
    }
    return arr;
}
listToArray(list);

function prepend(element, list) {           //ES6: if value property's name same as its value variable name, can just put value    
    return {value: element, rest: list};    //create new object first so you don't overwrite anything in list
}

function nth(list, index) {
    if (!list) return undefined;

    let count = 0;
    let value;
    for (let node = list; count <= index; node = node.rest) {
        count++;
        if (node) {
            value = node.value;
        }
        else return undefined;
    }
    return value;
}

//recursive (referred to answer)
function nth(list, index) {
    if (!list) return undefined;
    else if (index === 0) return list.value;
    else return nth(list.rest, index - 1);
}