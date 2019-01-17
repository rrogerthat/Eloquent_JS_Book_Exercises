/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### */

function loopTriangle() {
    let part = "#";
    for (let i = 1; i <= 7; i++) {
        console.log(part);
        part += "#";
    }
}

loopTriangle();

//space complexity can be improved by letting i = "#" and loop stopping when i.length <= 7