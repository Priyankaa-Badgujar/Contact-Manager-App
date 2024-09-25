import React, { useContext, useState } from 'react'
import { contactContext } from '../App'
import {Link,useParams, useSearchParams} from 'react-router-dom'
import './create.css'

const Update = () => {
  const updateContext = useContext(contactContext)
  const param = useParams()

  return (
    <div  className='create-form'>
     <form onSubmit={(e)=>{e.preventDefault()}}>
      <h1>Update Contact</h1>
      <label>Name</label><br/>
        <input type='text' value={updateContext.name} onChange={(e)=>{updateContext.setName(e.target.value)}}/><br/><br/>
        <label>Mobile</label><br/><br/>
        <input type='text' value={updateContext.mobile} onChange={(e)=>{updateContext.setMobile(e.target.value)}}/><br/><br/>
        <label>Email</label><br/><br/>
        <input type='text' value={updateContext.email} onChange={(e)=>{updateContext.setEmail(e.target.value)}}/><br/><br/><br/>
       <div className='btn'>
       <Link to={`/`}><button onClick={()=>{updateContext.updateButton(updateContext.editId)}}>Save</button></Link>
       <Link to={`/`}><button>Back</button></Link>
       </div>
     </form>
    </div>
  )
}

export default Update
