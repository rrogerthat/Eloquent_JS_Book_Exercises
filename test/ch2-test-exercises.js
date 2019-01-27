const loopTriangle = require("../Ch2_Program_Structure/1_looping_a_triangle");
const fizzBuzz = require("../Ch2_Program_Structure/2_fizzbuzz");
const expect = require("chai").expect;

describe("loopTriangle", function() {
    it("should accept only integers greater than 0", function () {
        expect(loopTriangle("")).to.equal("Input needs to be an integer 1 or greater");
        expect(loopTriangle(0)).to.equal("Input needs to be an integer 1 or greater");
        expect(loopTriangle(-5)).to.equal("Input needs to be an integer 1 or greater");
        expect(loopTriangle("number")).to.equal("Input needs to be an integer 1 or greater");
        expect(loopTriangle(2.5)).to.equal("Input needs to be an integer 1 or greater");
    });

    it("should contain the symbol # in each output", function() {
        expect(loopTriangle(7)).to.be.a("string");
        expect(loopTriangle(6)).to.include("#");
        expect(loopTriangle(5)).to.not.equal("");
    });

    it("output should increase in length when parameter increases", function() {
        const output_three = "#\n##\n###";
        expect(loopTriangle(3)).to.equal(output_three);

        const output_five = "#\n##\n###\n####\n#####";
        expect(loopTriangle(5)).to.equal(output_five);

        const output_six = "#\n##\n###\n####\n#####\n######";
        expect(loopTriangle(6)).to.equal(output_six);
    });
});             

// describe("fizzBuzz", function() {
    

//     it("should output 'FizzBuzz' when variable is divisible by 3 and 5", function() {
        
//         expect(fizzBuzz()).to.equal("FizzBuzz");
//     });
// }); 