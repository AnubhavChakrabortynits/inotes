import noteContext from "./noteContext";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const NoteState=(props)=>{
     
const history=useHistory()
     const fetchAllNotes=async()=>{
     // console.log(localStorage.getItem("id"))
   
      const response = await fetch("https://myinoteapp.herokuapp.com/user/get/", {
        method: 'POST', 
       
        headers: {
          "Accept":"application/json",
          'Content-Type': 'application/json'
         
        },
        credentials:'include',
       
        body: JSON.stringify({
         "token":localStorage.getItem("token"),
         "id":+localStorage.getItem("id")
         
      }) 
      });
      const pdata=await response.json();
      setNote(pdata)
      
     
      console.log(pdata)
      ;
    }
    
          const [notes,setNote]=useState(["  "," "]);

          const addNote=async(title,description,tag="general")=>{
            const response = await fetch("https://myinoteapp.herokuapp.com/user/add/", {
              method: 'POST', 
             
              headers: {
                "Accept":"application/json",
                'Content-Type': 'application/json'
               
              },
              credentials:'include',
             
              body: JSON.stringify({
                "title":title,
                "description":description,
                "tag":(tag===""?"general":tag),
                "user":+localStorage.getItem("id")
            }) 
            });
            const pdata=await response.json();
            setNote(pdata);
            
            console.log(pdata)
           
           
            alert('note added')
        }

          const deleteNote=async(id)=>{
            
            const response = await fetch(`https://myinoteapp.herokuapp.com/user/delete/${id}/`, {
              method: 'DELETE', 
             
              headers: {
                "Accept":"application/json",
                'Content-Type': 'application/json'
               
              },
              credentials:'include',
             
              body: JSON.stringify({
                
              "userid":+localStorage.getItem("id")
            }) 
            });
            const pdata=await response.json();
            setNote(pdata)
         
            console.log(pdata,typeof(pdata))
            alert('Note deleted')
            
            
          }

          const updateNote=async(id,title,description,tag)=>{
            console.log(id,title,description,tag);
            const response = await fetch(`https://myinoteapp.herokuapp.com/user/update/${id}/`, {
              method: 'PATCH', 
             
              headers: {
                "Accept":"application/json",
                'Content-Type': 'application/json'
               
              },
              credentials:'include',
             
              body: JSON.stringify({
                "id":localStorage.getItem("id"),
                "title":title===""?(notes.title):title,
                "description":description===""?(notes.description):description,
                
                "tag":(tag===""?"general":tag),
                "user":+localStorage.getItem("id")
            }) 
            });
            const pdata=await response.json();
            setNote(pdata);
            
            console.log(pdata)
          
           
           alert("Note updated")
          } 
          
     const login=async()=>{
      const response = await fetch("https://myinoteapp.herokuapp.com/user/login/", {
        method: 'POST', 
       
        headers: {
          "Accept":"application/json",
          'Content-Type': 'application/json'
         
        },
        credentials:'include',
       
        body: JSON.stringify({
          "email":"liz@gmail.com",
          "password":"liz"
      }) 
      });
      const pdata=await response.json();
     localStorage.setItem("token",pdata.jwt)
     localStorage.setItem("id",pdata.id)
     localStorage.setItem("noteid","")
    
     
      console.log(pdata)
     
     }     
          
 return (
 <>
  
    <noteContext.Provider value={{notes,setNote,addNote,deleteNote,updateNote,fetchAllNotes}}>
        {props.children}
    </noteContext.Provider>
    </>
 )
}

export default NoteState
