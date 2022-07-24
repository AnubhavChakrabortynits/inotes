import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Alert from './Alert';
export default function Login() {
    if(localStorage.getItem("token")==null){
      localStorage.setItem("token","")
      localStorage.setItem("id","")
      localStorage.setItem("noteid","")
    }
    const history=useHistory();
    const [alert,setAlert]=useState(null);
   const [logindata,setLogin]=useState({"lemail":"","lpassword":""});
   console.log(localStorage.getItem("token"))
    const login=async(email,password)=>{
        const response = await fetch("https://myinoteapp.herokuapp.com/user/login/", {
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
        if(pdata.error){
            setAlert(pdata.error);
            setTimeout(()=>{
                setAlert(null)
            },1500);
        }
        else{
          localStorage.setItem("token",pdata.jwt)
          localStorage.setItem("id",pdata.id)
        ;
          localStorage.setItem("noteid","")
         
            history.push("/")
            console.log(pdata)
        }       
       
       
       }  
       const onchange=(e)=>{
        setLogin({...logindata,[e.target.name]:e.target.value})
    }
       const handleLogin=(e)=>{
        e.preventDefault();
          
           
        const email=document.getElementById('lemail');
        const password=document.getElementById("lpassword");
        console.log(email.value,password.value);

         login(email.value,password.value);
           
        }
  return (
<>
{alert && <Alert errorvalue={alert} color="warning" />}
    <div>
   <h1 className='text-danger'>Login</h1>
    
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="lemail" className="form-label" style={{color:"yellow"}}>Email address</label>
    <input type="email" name="lemail" className="form-control" id="lemail" aria-describedby="emailHelp" onChange={onchange} required />
   
  </div>
  <div className="mb-3">
    <label htmlFor="lpassword" className="form-label" style={{color:"yellow"}}>Password</label>
    <input type="password" name="lpassword" className="form-control" id="lpassword" onChange={onchange} required />
  </div>
  <div className="mb-3 form-check">
   
  </div>
  <button type="submit" className="btn btn-primary" >Login</button>
</form>
    </div>
    </>
  )
}
