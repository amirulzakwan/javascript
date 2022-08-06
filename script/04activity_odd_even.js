console.log("Odd even number check")

var inputNumber = prompt("Enter any number: ")
console.log(inputNumber)

//write if condition with correct arithmetic operator
//to check if number is even or odd.

// if number is even
// output in console should Be 
//"Number n is even"

// if number is odd
// output in console should Be 
//"Number n is odd"

if (inputNumber %2 == 0) {
    console.log("The number is even.")
} else {
    console.log("The number is odd.")
} 

console.log("Note: The maximum number that javascript can handle is: " + Number.MAX_SAFE_INTEGER)