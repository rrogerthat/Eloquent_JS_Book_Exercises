/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

module.exports = 

function loopTriangle(size) {
    if (!Number.isInteger(size) || size < 1) return "Input needs to be an integer 1 or greater";
    let triangle = "";
    for (let i = "#"; i.length <= size; i += "#") {
        if (i.length === 1) triangle += i;
        else triangle += "\n" + i ;
    }
    return triangle; //use return instead of console.log as its considered a side effect and no value actually gets returned
}

