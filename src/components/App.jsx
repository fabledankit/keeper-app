import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        console.log(newNote);
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />

            <CreateNote onAdd={addNote} />

            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        deleteClicked={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;