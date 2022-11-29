import React, { useState } from "react";

function CreateNote(props) {
    const [note, createNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;
        createNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        createNote({title: "", content: ""})
        event.preventDefault();
    }

    return (
        <div>
        <form>
        <input type="text" name="title" onChange={handleChange} placeholder="Title" value={note.title} />
        <textarea rows="3" name="content" onChange={handleChange} placeholder="Note content" value={note.content} />
        <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateNote;