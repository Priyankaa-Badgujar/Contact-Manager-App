import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Create from './Component/Create';
import Update from './Component/Update';
import Read from './Component/Read';
import { createContext, useEffect, useState } from 'react';

export const contactContext = createContext(null)

function App() {
  const [id,setId] = useState(0);
  const [data,setData] = useState([])
  const [data2,setData2] = useState([])
  const [name,setName] = useState('')
  const [mobile,setMobile] = useState('')
  const [email,setEmail] = useState('')
  const [editId,setEditId] = useState(``)
  const [search,setSearch] = useState('')
  const [showButton,setShowButton] = useState(false)

//   const fetchData =()=>{
//       fetch(`https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json`).then((res)=>
//       res.json().then((result)=>{
//           setData(result)
//       }))
//   }

//   useEffect(()=>{
//     fetchData()

// },[])

  const addData=()=>{
    setData2((item)=>{
      setId(id+1)
      const newvalue=[
        ...item,{
          name:name,
          mobile:mobile,
          email:email,
          id:id
        }
      ]
      return newvalue
    })
    setName("");
    setEmail("");
    setMobile("")
    setId("")
  }

  const editButton=(id)=>{
    console.log(data2)
    
    const dt = data2.filter((item)=>item.id===id);
    if(dt!==undefined){
      setId(id)
      setName(dt[0].name);
      setEmail(dt[0].email);
      setMobile(dt[0].mobile);
    }
   
  }

  const deleteButton=(id)=>{
    const dt=data2.filter((item)=>item.id!==id)
    setData2(dt)
  }
  
  
  const updateButton=()=>{
   const index=data2.map((item)=>{
    return item.id
   }).indexOf(id)

   const dt=[...data2]
   dt[index].name=name;
   dt[index].email=email;
   dt[index].mobile=mobile;
   setData2(dt)
   setName("");
   setEmail("");
   setMobile("")
   setId("")
  }

  const readValue=(id)=>{
    const dt = data2.filter((item)=>item.id===id)
    setName(dt[0].name)
    setEmail(dt[0].email)
    setMobile(dt[0].mobile)
  }

  // const fetchDelete=(id)=>{
  //   fetch(`https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json/${id}`,{
  //     method:"DELETE"
  //   }).then((res)=>res.json().then((result)=>{
  //     console.log(result)
  //     fetchData()
  //   }))
  // }
  
  return (
    <div className="App">
      <contactContext.Provider 
      value={{data,setData,data2,setData2,name
      ,setName,mobile,setMobile,email,setEmail,id,setId,addData,editButton,
      editId,setEditId,showButton,setShowButton,updateButton,search,
      setSearch,deleteButton,readValue}}>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
      </Routes>
      </contactContext.Provider>
    </div>
  );
}

export default App;
