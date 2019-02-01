function reverseArray(arr) {
    let newArr = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let index = 0;
    for (let i = arr.length; i > 1; i--) {
        arr.splice( index, 0 ,arr.pop() );
        index++;
    }
    return arr;
}