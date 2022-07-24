import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Notes from './Notes'
import Alert from './Alert'


export default function Home() {

  //const [alertval,setAlert]=useState("WELCOME To iNOTEBOOK")
 const history=useHistory();  
 console.log(localStorage)
 if(localStorage.getItem("token")==null || localStorage.getItem("token")==""){
 // setTimeout(()=>{
   // setAlert(null)
  //},5000)

history.push("/login");
 }

 else{
 
 // setTimeout(()=>{
   // setAlert(null)
  //},5000)

  console.log(localStorage.getItem("token"))
  
 }
  return (
    <>
   {/* alertval &&     <Alert errorvalue={alertval} color="success" /> */}
    
    <Notes/>
    </>
  )
}
