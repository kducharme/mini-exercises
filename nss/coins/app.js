let submit = document.querySelector('#submit').addEventListener('click', calcChange);

// Dollar amounts
let coins = {
    quarter: .25,
    dime: .10,
    nickel: .05,
    penny: .01
}

function calcChange() {
    let totalCost = parseFloat(document.querySelector('#cost').value),
        amountRec = parseFloat(document.querySelector('#amount').value),
        changeRequired = totalCost - amountRec,
        quartersRequired, dimesRequired, nickelsRequired, penniesRequired;

    if (changeRequired > 0) {
        quartersRequired = Math.floor(changeRequired / coins.quarter);
        dimesRequired = Math.floor((changeRequired - (quartersRequired * coins.quarter)) / coins.dime);
        nickelsRequired = Math.floor((changeRequired - (quartersRequired * coins.quarter) - (dimesRequired * coins.dime)) / coins.nickel);
        penniesRequired = Math.ceil((changeRequired - (quartersRequired * coins.quarter) - (dimesRequired * coins.dime) - (nickelsRequired * coins.nickel)) / coins.penny);
    }
    else {
        console.log('You need to pay more, dummy');
    }
    console.log(
        'quarters: ' + quartersRequired,
        'dimes: ' + dimesRequired,
        'nickels: ' + nickelsRequired,
        'pennies: ' + penniesRequired,
    )
};