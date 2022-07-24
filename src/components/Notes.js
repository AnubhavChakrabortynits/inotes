import React,{useState,useContext, useEffect} from 'react'
import noteContext from '../contextapi/notes/noteContext';
import Notesitem from './Notesitem';
import Addnote from './Addnote';


export default function Notes() {
    const context=useContext(noteContext);
  const {notes,fetchAllNotes}=context;
 

  useEffect(()=>{
    fetchAllNotes();
  },[])
 
  return (<>    <Addnote/>






    <div className="row my-2">
  <h2 className='border-bottom text-warning'>Your Notes</h2>
  {("" || notes) && Array.from(notes)?.map((notes)=>{
   return <Notesitem key={notes?.id} note={notes} />
  })}
</div>
</>
  )
}
