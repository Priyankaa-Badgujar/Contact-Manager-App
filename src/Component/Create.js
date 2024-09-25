import React, { useContext } from 'react'
import { contactContext } from '../App'
import { Link } from 'react-router-dom';
import './create.css'

const Create = () => {
    const addContext = useContext(contactContext);

  return (
    <div className='create-form'>
     <form onSubmit={(e)=>{e.preventDefault()}}>
     <h1>Create New Contact</h1>
        <label>Name</label><br/><br/>
        <input type='text' value={addContext.name} onChange={(e)=>{addContext.setName(e.target.value)}}/><br/><br/>
        <label>Mobile</label><br/><br/>
        <input type='text' value={addContext.mobile} onChange={(e)=>{addContext.setMobile(e.target.value)}}/><br/><br/>
        <label>Email</label><br/><br/>
        <input type='text' value={addContext.email} onChange={(e)=>{addContext.setEmail(e.target.value)}}/><br/><br/><br/>
       <div className='btn'>
       <Link to={`/`}><button onClick={()=>{addContext.addData()}}>Submit</button></Link>
       <Link to={'/'}><button>Back</button></Link>
       </div>
     </form>
    </div>
  )
}

export default Create
