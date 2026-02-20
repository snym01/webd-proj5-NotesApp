const input = document.getElementById("title");
const notePad = document.getElementById("note-pad");
const addBtn = document.getElementById("addBtn");
const NotesContainer = document.querySelector(".notes-container");
let notes = []

addBtn.addEventListener("click", function () {
    if (notePad.value.trim() === "") return;
    const noteObj = {
        id: Date.now(),
        title: input.value,
        content: notePad.value
    }

    notes.push(noteObj)
})

