import React, { useContext,useState } from 'react'
import noteContext from '../contextapi/notes/noteContext';

export default function Notesitem(props) {
    const context =useContext(noteContext);
    const {deleteNote}=context;
    const {updateNote}=context;
    const [upnote,setNote]=useState({title:"",description:"",tag:""})
    
    
  
    const {note}=props;
  
  
  const onchange=(e)=>{
      setNote({...upnote,[e.target.name]:e.target.value})
  }
 



  return (
    <>

      
    <div className='col-md-3 my-2'>
    <div className="card">
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">EDIT NOTE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>      
  <div className="mb-3"> 
    <label htmlFor="utitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="utitle" aria-describedby="emailHelp" name='title' onChange={onchange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="udescription" className="form-label">Description</label>
    <input type="text" className="form-control" id="udescription" name='description' onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="utag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="utag" name='tag' onChange={onchange}/>
  </div>

  
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={(e)=>{
              
            console.log(note.id);
         updateNote(localStorage.getItem("noteid"),document.getElementById("utitle").value,document.getElementById("udescription").value,document.getElementById("utag").value);

        }}>Save changes</button>
      </div>
    </div>
  </div>
</div>
  
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onClick={()=>{
      deleteNote(note.id)
    }}>
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>  {/* delete icon*/}

    <svg className="mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16" 
    onClick={()=>{
      localStorage.setItem("noteid",note.id)
    
      document.getElementById("utitle").value=note.title;
      document.getElementById("udescription").value=note.description;
      document.getElementById("utag").value=note.tag
    }}>
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg>


    
  </div>
</div>
     
    </div>
    </>
  )
}
