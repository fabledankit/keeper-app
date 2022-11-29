import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, createNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        createNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        createNote({ title: "", content: "" })
        event.preventDefault();
    }

    
    function expandForm(event) {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                { isExpanded && <input type="text" name="title" onChange={handleChange} placeholder="Title" value={note.title} /> }
                <textarea onClick={expandForm} rows={ isExpanded ? 3 : 1 } name="content" onChange={handleChange} placeholder="Note content" value={note.content} />
                <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateNote;