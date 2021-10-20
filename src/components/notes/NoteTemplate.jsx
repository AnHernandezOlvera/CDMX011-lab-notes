import React from 'react'

const NoteTemplate = ({note}) => {
    return (
        <div className="div__note" id={note.id}>
            <p>{note.title}</p>
            <p>{note.text}</p>
            <p>{note.id}</p>
        </div>
    )
}

export default NoteTemplate
