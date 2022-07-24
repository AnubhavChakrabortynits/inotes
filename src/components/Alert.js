import React from 'react'

export default function Alert(props) {
  return (
    <div>
     <div className={`alert alert-${props.color} alert-dismissible fade show`} role="alert">
  <strong>{props.errorvalue}</strong> 
  
</div>
  
</div>

    
  )
}


