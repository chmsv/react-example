import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => {

  let getTitle = (note) => {
    const title = note.body.split('\n')[0]

    if (title.length > 45) {
      return title.slice(0, 45) + "..."
    }

    return title
  }

  let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
      return content.slice(0, 45)
    } else {
      return content
    }
  }

  let getDate = (note) => {
    return new Date(note.updated).toLocaleDateString()
  }

  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-item m-4 p-2 border-blue-700 rounded-md hover:border-double border-4 list-none hover:list-disc'>
        <h3 className='note-title p-1 text-lg font-bold'>{getTitle(note)}</h3>
        <p>
          <p className='note-date m-1 text-xs text-blue-500'>{getDate(note)}</p>
          <p className='note-date text-s'>{getContent(note)}</p>
        </p>
      </div>
    </Link>
  );

}

export default ListItem
