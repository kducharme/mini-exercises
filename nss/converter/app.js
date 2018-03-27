document.querySelector('#far').addEventListener('keyup', farToCel);
document.querySelector('#cel').addEventListener('keyup', celToFar);

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.

function farToCel() {
    let far = document.querySelector('#far'),
        cel = document.querySelector('#cel');

    if (far.value === '') {
        cel.value = '';
    }
    else {
        convertTemp = (5 / 9) * (parseFloat(far.value) - 32);
        cel.value = convertTemp;
    }
}

function celToFar() {
    let far = document.querySelector('#far'),
        cel = document.querySelector('#cel');

    if (cel.value === '') {
        far.value = '';
    }
    else {
        convertTemp = (1.8 * parseFloat(cel.value)) + 32;
        far.value = convertTemp;
    }
}