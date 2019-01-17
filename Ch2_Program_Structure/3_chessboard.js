/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to 
separate lines. At each position of the grid there is either a space or a "#" character. The 
characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the 
program so that it works for any size, outputting a grid of the given width and height. */

//odd lines: starts with a space
//space or "#" each represent one grid element
//each line has # of elements given as size argument
//# of lines is also the size argument

function chessboard(size) {
    let line = 1;

    //this loop creates # of lines equal to size
    while (line <= size) {
        //if a odd line, start pattern with an empty element    
        if (line % 2 !== 0) {
            let oddChessrow = ("_" + "#").repeat(Math.ceil(size / 2));
            
            if (size % 2 === 0) {
                console.log(oddChessrow + "\n");    //newline not really needed 
            } 
            //if size is odd #, need to remove last element to match size #
            else console.log(oddChessrow.substring(0, oddChessrow.length - 1) + "\n");
        }   
        //if even line, start pattern with "#" then an empty element 
        else {
            let evenChessrow = ("#" + "_").repeat(Math.ceil(size / 2));

            if (size % 2 === 0) {
                console.log(evenChessrow + "\n");
            } 
            else console.log(evenChessrow.substring(0, evenChessrow.length - 1) + "\n");
        }
        line++;
    }
}

chessboard(9);