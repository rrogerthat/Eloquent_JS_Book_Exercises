function loop(val, testFunc, bodyFunc, updateFunc) {
    let current = val;
    testFunc(current);
}

function testFunc(current) {
    if (current >= 1) bodyFunc(current);
    else return false;
}

function bodyFunc(current) {
    console.log(current);
    updateFunc(current);
}

function updateFunc(current) {
    current -= 1;
    testFunc(current);
}

loop(3, testFunc, bodyFunc, updateFunc);

