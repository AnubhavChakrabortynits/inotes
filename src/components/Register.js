import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Alert from './Alert';
export default function Register() {



    const [registerdata,setRegister]=useState({"lemail":"","lpassword":""});
    const [alertval,setAlert]=useState(null);
    const history=useHistory();

    const register=async(email,password)=>{
        const response = await fetch("https://myinoteapp.herokuapp.com/user/register/", {
          method: 'POST', 
         
          headers: {
            "Accept":"application/json",
            'Content-Type': 'application/json'
           
          },
          credentials:'include',
         
          body: JSON.stringify({
            "email":email,
            "password":password
        }) 
        });
        const pdata=await response.json();
        console.log(pdata)
        if(pdata.error){
            setAlert(pdata.error);
            setTimeout(()=>{
                setAlert(null)
            },1500);
        }
        else{
          history.push("/login")
        }       
       
       
       }  



    const onchange=(e)=>{
        setRegister({...registerdata,[e.target.name]:e.target.value})
    }
       const handleRegister=(e)=>{
        e.preventDefault();
          
           
        const email=document.getElementById('remail');
        const password=document.getElementById("rpassword");
        console.log(email.value,password.value);

         register(email.value,password.value);
           
        }
  return (  
    
    
    <div>
          
    {alertval && <Alert errorvalue={alertval} color="danger"/>}
   <form onSubmit={handleRegister}>
<div className="mb-3">
<h1 className='text-danger'>Sign Up</h1>
 <label htmlFor="remail" className="form-label text-warning">Email address</label>
 <input type="email" name="remail" className="form-control" id="remail" aria-describedby="emailHelp" onChange={onchange} required />

</div>
<div className="mb-3">
 <label htmlFor="rpassword" className="form-label text-warning" >Password</label>
 <input type="password" name="rpassword" className="form-control" id="rpassword" onChange={onchange} required />
</div>
<div className="mb-3 form-check">

</div>
<button type="submit" className="btn btn-primary" >Sign Up</button>
</form>
 </div>
    
  )
}
