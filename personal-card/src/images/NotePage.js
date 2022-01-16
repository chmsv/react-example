import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const NotePage = (props) => {

  let noteID = props.match.params.id

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteID])

  let getNote = async () => {
    if (noteID === 'new') return
    let response = await fetch(`http://localhost:8000/notes/${noteID}`)
    let data = await response.json()
    setNote(data)
  }

    let createNote = async () => {
      await fetch(`http://localhost:8000/notes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      });
    };

  let updateNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let deleteNote = async () => {
    await fetch(`http://localhost:8000/notes/${noteID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
    props.history.push('/')
  }

  let handleSubmit = () => {

    if (noteID !== 'new' && !note.body) {
      deleteNote()
    } else if (noteID !== 'new') {
      updateNote()
    } else if (noteID === 'new' && note !== null) {
      createNote()
    }

    props.history.push('/')
  }

  return (
    <div>
      <div className='note-single-header'>
        <h3 className='note-single-back text-blue-800 hover:font-semibold p-8'>
          <Link to='/' onClick={handleSubmit}>
            &#5176; Back to note list
          </Link>
        </h3>

        {noteID !== 'new' ? (
          <button
            onClick={deleteNote}
            className='note-delete text-rose-500 border-4 border-current hover:font-semibold mt-2 mb-10 p-1 hover:text-rose-700'
          >
            Delete Note
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className='note-delete text-green-500 border-4 border-current hover:font-semibold mt-2 mb-10 p-1 hover:text-green-700'
          >
            Create
          </button>
        )}
      </div>

      <textarea
        value={note?.body}
        className='note-single block py-3 pl-9 pr-3 shadow-sm border-blue-700 rounded-md hover:border-double border-4 list-none hover:list-disc'
        cols='20'
        rows='10'
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      ></textarea>
    </div>
  );
}

export default NotePage
