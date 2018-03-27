// Loop through the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML <div> element. Ensure that each item is in a block element (e.g. li, div, p. etc...)

var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

let boybands = document.querySelector('#boy-bands'),
veggies = document.querySelector('#vegetables');
postContent();

function postContent() {
    let newItem = document.createElement('li');

    for (let i = 0; i < bands.length; i++) {
        newItem.textContent = bands[i];
        boybands.innerHTML += newItem.outerHTML;
        
    }
    for (let i = 0; i < vegetables.length; i++) {
        newItem.textContent = vegetables[i];
        veggies.innerHTML += newItem.outerHTML;
    }
}

