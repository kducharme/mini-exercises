// Goals:
// 1. If there are an odd number of notes, set the opacity of odd notes to 0 - DONE
// 2. If there are an even number of notes, set the opacity of even notes to 0 - DONE
// 3. If a note contains the word banana, apple, or pear, make all other notes transparent except the note with the word
// 4. If a note appears below the fold, delete all other notes

// Process:
// 1. 

// Global stuff
let allNotes = [];
let badWords = ["banana", "apple", "pear"];
let printedNotes = ""

// Starts process of creating new note after form submitted
let submitButton = document.getElementById("submit-button").addEventListener("click", addNote)

// Note template
function Note(title, details) {
    this.title = title;
    this.details = details;
}

// Creates new note and adds to allNotes array 
function addNote() {
    let titleEl = document.getElementById("title")
    let detailsEl = document.getElementById("details")

    newNote = new Note(titleEl.value, detailsEl.value)
    allNotes.push(newNote)

    printNote(newNote)
    resetFields(titleEl, detailsEl)
    checkBadWords(newNote)
    // changeBackground()
}

// Resets fields once form is submitted
function resetFields(f1, f2) {
    f1.value = ""
    f2.value = ""
}

// Prints notes to the DOM
function printNote(note) {
    for (var i = 0; i < 1; i++) {
        printedNotes += `<div class="note-container">
        <p class="note-title" value="${note.title}" id="prod-name">${note.title}</p>
        <p class="details" value="${note.details}" id="product-cost">${note.details}</p>
        </div>`
    }
    document.getElementById("printed-notes").innerHTML = printedNotes
}

// Make notes transparent
function changeBackground() {
    let notes = document.querySelectorAll('div.note-container');
    let odd = false;

    if ((notes.length % 2) !== 0) {
        odd = true;

        for (var i = 0; i < notes.length; i += 2) {
            notes[i].className = "transparent";
        }
    }
    else {
        for (var i = 1; i < notes.length; i += 2) {
            notes[i].className = "transparent";
        }
    }
}

// Check for flagged words
function checkBadWords(note) {
    let notes = document.querySelector('div.note-container');

    let noteTitle = note.title.toLowerCase()
    noteTitle = noteTitle.split();

    let noteDetails = note.details.toLowerCase();
    noteDetails = noteDetails.split();

    if (noteTitle.includes("banana", "apple", "pear") || noteDetails.includes("banana", "apple", "pear")) {
        for (var i = 0; i < allNotes.length; i++) {
        console.log("true")
        }
    }
    else {
        console.log("false")
    }
}