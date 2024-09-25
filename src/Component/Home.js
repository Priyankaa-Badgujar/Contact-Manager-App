import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { contactContext } from '../App'
import { Link } from 'react-router-dom'

const Home = () => {
   const homeContext = useContext(contactContext)
  return (
    <div className='base-hom'>
      <h1>Contact List App</h1>
      <div className='top'>
      <input type='text' placeholder='Search' onChange={(e)=>{homeContext.setSearch(e.target.value)}}/>
      <Link to='/create'><button><i class="fa-solid fa-plus"> Add</i></button></Link>
      </div>
        {/* {
            homeContext.data.filter((item)=>{
              return homeContext.search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(homeContext.search)
            }).map((item,i)=>(
                <div className='home-com' key={i}>
                <h5>{item.id}</h5>
                <div className='name'>
                <h4><i class="fa-regular fa-user"></i><span> </span>{item.name}</h4>
                <h4>{item.mobile}</h4>
                </div>
                <div className='icon'>
                <i class="fa-regular fa-eye"></i>
                  <i class="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash"></i>
                </div>
                </div>
            ))
        }
         */}
        {
            homeContext.data2.filter((item)=>{
              return homeContext.search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(homeContext.search)
            }).map((item,i)=>(
                <div className='home-com' key={i}>
                <h5>{i+1}</h5>
                <div className='name'>
                <h4><i class="fa-regular fa-user"></i><span> </span>{item.name}</h4>
                <h4>{item.mobile}</h4>
                </div>
                <div className='icon'>
                <Link to={`/read`}><button onClick={()=>{homeContext.readValue(item.id)}}><i class="fa-regular fa-eye"></i></button></Link>
                <Link to={`/update`}><button onClick={()=>{homeContext.editButton(item.id)}}><i class="fa-regular fa-pen-to-square"></i></button></Link>
                <Link><button onClick={()=>{homeContext.deleteButton(item.id)}}><i class="fa-solid fa-trash"></i></button></Link>
                </div>
                </div>
            ))
        }
       
    </div>
  )
}

export default Home
