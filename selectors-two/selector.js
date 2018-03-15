// Getting the two different lists
let listLength = document.getElementsByTagName("ul")[0].childElementCount;
let allTasks = [];

(function() {
    let odd = false;

    for (var i = 0; i < listLength; i++){
        let item = document.querySelectorAll("li")[i].innerHTML;
        allTasks.push(item)
    }
})()

console.log(allTasks)