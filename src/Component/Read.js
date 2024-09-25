import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contactContext } from '../App'

const Read = () => {
  const readContext=useContext(contactContext)
  return (
    <div  className='create-form'>
    <form onSubmit={(e)=>{e.preventDefault()}}>
     <h1>View Contact</h1>
     <label>Name</label><br/>
       <input type='text' value={readContext.name} onChange={(e)=>readContext.setName(e.target.value)} readOnly/><br/><br/>
       <label>Mobile</label><br/><br/>
       <input type='text' readOnly value={readContext.mobile}  onChange={(e)=>readContext.setMobile(e.target.value)}/><br/><br/>
       <label>Email</label><br/><br/>
       <input type='text' readOnly value={readContext.email}  onChange={(e)=>readContext.setEmail(e.target.value)}/><br/><br/><br/>
      <div className='btn'>
      <Link to={`/`}><button>Back</button></Link>
      </div>
    </form>
   </div>
  )
}

export default Read
