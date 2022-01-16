import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddNote from '../components/AddNote'

const NotesList = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('http://localhost:8000/notes/')
    let data = await response.json()
    setNotes(data)

  }

  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title text-3xl font-bold text-blue-700 p-6'>
          &#9782; {notes.length} notes in the list
        </h2>
      </div>
      <div className='notes-list p-6 text-blue-700'>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddNote />
    </div>
  );
}

export default NotesList
