import React, { useState } from 'react'
import { useNoteStore } from '../store'
export default function DeleteNoteList({noteId, cid, data}) {
    const { deleteNoteById, setNoteTreeChanged, addToDeleteNotes } = useNoteStore();
    const [ confirmDelete, setConfirmDelete ] = useState(false)
    const deleteNoteInFolder = () => {
        deleteNoteById({id: noteId})
        //if the note has a cid, then that should mean that it came from the user's table 
        if(cid) {
            setNoteTreeChanged(true)
            addToDeleteNotes(noteId)
        } 
    }
    
  return (
    <div>
      { data?.value ?
      // data.value = {id, title, value: { id, content, title} }
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.value?.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
                {data ? data.value.content.content[1]?.content[0].text : null}
            </p>
            {confirmDelete ? 
                <button onClick={() => deleteNoteInFolder()} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'>
                    Confirm
                </button>
                :
                <button onClick={() => setConfirmDelete(true)} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'>
                    Delete
                </button> 
            }
        </div>
          :
          <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Untitled
            </h5>
            {confirmDelete ? 
                <button onClick={() => deleteNoteInFolder()} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'>
                    Confirm
                </button>
                :
                <button onClick={() => setConfirmDelete(true)} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'>
                    Delete
                </button> 
            }
          </div>
      }
    </div>


  )
}
