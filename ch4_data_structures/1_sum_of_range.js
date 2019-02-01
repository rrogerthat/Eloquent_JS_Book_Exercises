function range(start, end) {
    if (end < start) return "Second parameter should be larger than or equal to first parameter";
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let total = 0;

    for (let item of arr) {
        total += item;
    }
    return total;
}

//bonus
function range(start, end, step=1) {
    if (step === 0) return "Third parameter cannot be 0";
    else if (end < start && step > 0) return "Second parameter should be larger than or equal to first parameter";
    else if (end > start && step < 0) return "Second parameter should be smaller than or equal to first parameter";

    let arr = [];

    switch(true) {
        case (step > 0):
        for (let i = start; i <= end; i+=step) {
            arr.push(i);
        }
        case (step < 0):
        for (let i = start; i >= end; i+=step) {
            arr.push(i);
        }
    }
    return arr;
}