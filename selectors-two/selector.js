let allTasks = [];
findWord()

// Adds all list items to an array
function findWord () {
    let listLength = document.getElementsByTagName("ul")[0].childElementCount;
    let pickedWord = prompt("Pick a word, any word").toLowerCase();
    
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







