function flatten(arr) {
    return arr.reduce( (a,b) => a.concat(b) );
}

flatten([[1, 2, 3], [4, 5], [6]]);
