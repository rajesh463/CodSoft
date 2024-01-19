import React from 'react'
import submitted from './submitted1.gif';
import "./success.css"


function SuccessfullySubmit()
 {
  return (
    
    <div className='Sucess'>
     <div  className='successimg1'> <img  className='successimg1' src={submitted} /></div>
     
     <h2 className='Submitted-text'>Thank You! </h2>
     <h5 className='Submitted-text'>Form Submitted Successfully </h5>
     
       </div>
  )
}

export default SuccessfullySubmit