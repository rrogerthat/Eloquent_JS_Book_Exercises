function every(arr, testFunc) {
    for (let item of arr) {
        if ( !testFunc(item) ) {
            return false;
        }
    }
    return true;
}

function testFunc(item) {
    return item < 10;
}
every([1,2,11,8], testFunc);


function everyWithSome(arr, testFunc) {
     return !arr.some(testFunc);
}

function testFunc(item) {
    return !(item < 10);
}
everyWithSome([11,2,9,8], testFunc);

//if every element is false (actuality is true), return true
//if one element true (actuality is false), return false

