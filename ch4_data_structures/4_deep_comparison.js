function deepEqual(a,b) {
    console.log(a,b);
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return a === b;

    else if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
        if (Object.keys(a).length !== Object.keys(b).length) return false;

        for (let item in a) {
            if (!b.hasOwnProperty(item)) return false;
            else if (typeof b[item] === "object" && typeof a[item] === "object" && !deepEqual(a[item], b[item])) return false;
            else if (typeof b[item] !== "object" && typeof a[item] !== "object" && b[item] !== a[item]) return false;
        }
        return true;
    }
}