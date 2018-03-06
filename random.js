// Function needs to accept lower and upper number
// Generate random number between the 2

function randomNumber(low, high) {
    if (isNaN(low) || isNaN(high)) {
        alert("One of the inputs is not a number")
    }
    let randomNum = Math.floor(Math.random() * (high - low + 1)) + low;
    console.log(randomNum)
}

function submitInput() {
    let low = document.getElementById("input1").value
    let high = document.getElementById("input2").value
    randomNumber(parseInt(low), parseInt(high))
    countUntilHigh(parseInt(low), parseInt(high))
}

function countUntilHigh(low, high) {
    let printCount = low;
    for (var i = low; i < high; i++) {
        printCount++
        console.log(printCount)
    }
}

document.getElementById("submit-button").addEventListener("click", submitInput)