let sentenceWords = [],
printWords = "",
sentence = "Hello meg the app works and it's really fun to use";
sentenceWords = sentence.split(" ");
addExcitement();

function addExcitement() {
    for (let i = 0; i < sentenceWords.length; i++) {
        if (i % 3 === 2) {
            printWords += " " + sentenceWords[i] + "!";
        }
        else {
            printWords += " " + sentenceWords[i];
        }
        console.log(printWords)
    }
}