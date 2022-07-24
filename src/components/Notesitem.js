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
        <h5 className="modal-title" id="exampleModalLabel">EDIT NOTE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>      
  <div className="mb-3"> 
    <label htmlFor="utitle" className="form-label">Title</label>
    <input type="text" maxLength="30" className="form-control" id="utitle" aria-describedby="emailHelp" name='title' onChange={onchange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="udescription" className="form-label">Description</label>
    <textarea type="text" className="form-control" id="udescription" name='description' onChange={onchange}></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="utag"  className="form-label">Tag</label>
    <input type="text" maxLength="15" className="form-control" id="utag" name='tag' onChange={onchange}/>
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
   
  <div className="card-body justify-content-centre" style={{height:"210px"}}>
    <h5 className="card-title border-bottom border-dark">{note.title}</h5>
    <p className="card-text">{note?.description?.length>10?(note.description.substring(0,10)+"..."):note.description}</p>
    <p><strong>Tag:</strong><small>{(note?.tag?.length>10)?(note?.tag?.substring(0,7)+"..."):note?.tag}</small></p>
    <svg className="mx-auto" style={{margin:"3px",display:"inline-block",width:"20px",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" onClick={()=>{
      deleteNote(note.id)
    }}>
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>  {/* delete icon*/}

    <svg className="mx-auto" style={{margin:"3px",display:"inline-block",width:"20px",cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16" 
    onClick={()=>{
      localStorage.setItem("noteid",note.id)
    
      document.getElementById("utitle").value=note.title;
      document.getElementById("udescription").value=note.description;
      document.getElementById("utag").value=note.tag
    }}>
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
</svg>


<svg className='mx-auto' style={{float:"right",margin:"3px",display:"inline-block",width:"20px",cursor:"pointer"}} xmlns="http://www.w3.org/2000/svg" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={()=>{
  document.getElementById('viewlabel').textContent=note.title
  document.getElementById('viewdesc').textContent=note.description
  document.getElementById('mtag').textContent=note.tag
}}  width="22" height="22" viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>



    
  </div>
</div>
     
    </div>


    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="viewlabel">Modal title</h5>
        
      </div>
      <textarea disabled={true} rows="10" className="modal-body" id="viewdesc" style={{overflowY:"auto"}} >
      
        
        
        
      </textarea>
     
     
      <div className="modal-footer">
      <strong className='ms-0'>TAG:</strong><div style={{marginRight:"20px",float:"left"}} id="mtag"></div>
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

    </>
  )
}
