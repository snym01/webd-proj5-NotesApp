const title = document.getElementById("title");
const notePad = document.getElementById("note-pad");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.querySelector(".notes-container");

let notes = []

addBtn.addEventListener("click", function () {
    const trimmedTitle = title.value.trim();
    const trimmedContent = notePad.value.trim();
    if (trimmedContent === "") return;
    const finalTitle = trimmedTitle || "Untitled";

    const noteobj = {
        id: Date.now(),
        title: finalTitle,
        content: trimmedContent
    };

    notes.push(noteobj);
    console.log(notes);

    title.value = "";
    notePad.value = "";

    const newNote = document.createElement("div");
    newNote.dataset.id = noteobj.id;
    newNote.classList.add("note-card");

    const heading = document.createElement("h3");
    heading.textContent = finalTitle;

    const paragraph = document.createElement("p");
    paragraph.textContent = trimmedContent;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", function(){
        const noteId = Number(newNote.dataset.id);
        notes = notes.filter(note => note.id !== noteId);
        newNote.remove();
    })


    newNote.append(heading);
    newNote.append(paragraph);
    newNote.append(deleteBtn);
    notesContainer.append(newNote);

})

