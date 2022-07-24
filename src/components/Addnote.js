import React, { useContext,useState } from 'react'
import noteContext from '../contextapi/notes/noteContext'
export default function Addnote() {
    const context=useContext(noteContext);
    const {addNote}=context
    const [note,setNote]=useState({title:"",description:"",tag:""})
const handleClick=(e)=>{
       if(document.getElementById("title").value==="" || document.getElementById("description").value===""){
        alert("Title or description is required")
        return ""
       }
       
    console.log("handleclick")

addNote(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("tag").value);
}

const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <div>
          <div className='container my-2'>
      <h2 className='border-bottom text-warning'>ADD A NEW NOTE</h2>
<div>      
  <div className="mb-3"> 
    <label htmlFor="title" className="form-label" style={{color:"red"}} >Title</label>
    <input type="text" maxlength="30" className="form-control" id="title" aria-describedby="emailHelp" name='title' onChange={onchange} required={true} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" style={{color:"red"}}>Description</label>
    <textarea type="text" className="form-control" id="description" required={true} name='description' onChange={onchange}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label" style={{color:"red"}}>Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' maxlength="15" onChange={onchange}/>
  </div>

  <button onClick={handleClick} class="btn btn-primary">ADD</button>
</div>



    </div>
    </div>
  )
}
