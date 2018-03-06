// Function needs to accept lower and upper number
// Generate random number between the 2

function randomNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("One of the inputs is not a number")
    }
    let randomNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    console.log(randomNum)
}
randomNumber(5, 20)
randomNumber(8, 10)