let allTasks = [];
addItem();

// Prompts user to add a new bullet, and it adds to list
function addItem () {
    let bullet = prompt("Add to-do to list.");
    let list = document.getElementsByTagName("ul")[0];

    let newItem = document.createElement("li")
    let newBullet = document.createTextNode(bullet)
    newItem.appendChild(newBullet)
    list.appendChild(newItem).className = "list-item"

    console.log(list)

}

// Adds all list items to an array
function findWord () {
    let listLength = document.getElementsByTagName("ul")[0].childElementCount;
    // let pickedWord = prompt("Pick a word, any word").toLowerCase();
    
    for (var i = 0; i < listLength; i++) {
        let item = document.querySelectorAll("li")[i].innerHTML.toLowerCase();
        if (item.includes(pickedWord)) {
            removeWord(pickedWord, item)
            document.querySelectorAll("li")[i].innerHTML = newTask
            console.log("Success")
        }
        allTasks.push(item)
    }
}

// Removes inputted word
function removeWord(pickedWord, item) {
    let allWords = item.split(" ")
    let location = allWords.indexOf(pickedWord);
    allWords.splice(location, 1);
    console.log(allWords)

    titleCase(allWords)
}

// Concatenates words and makes it title case
function titleCase(allWords) {
    newTask = (allWords.join(" "))
    newTask = newTask.charAt(0).toUpperCase() + newTask.slice(1)
}