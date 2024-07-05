import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home';
import Document from './Document';
import Example from './Example';
import Table from './Table'

const IndexFile = () => {

    const navigate = useNavigate();

  const [userData, setUserData] = useState([
    {id : 1, name : "Ruhan", email : "ruhan@gmail.com", phone: "1234567890", city : "Indore"},
    {id : 2, name : "Shreya", email : "shreya@gmail.com", phone: "1234567890", city : "Indore"},
    {id : 3, name : "Palav", email : "palav@gmail.com", phone: "1234567890", city : "Indore"},
  ]);

  const [edit, setEdit] = useState({
    Data : {}, isEdit : false
  })


//   Delete
  const deleteData = (id) => {
    setUserData(
        userData.filter(data => data.id !== id)
    )
  }


//   Save
  const saveData = (formData) => {
    const newData = {
        id : crypto.randomUUID(),
        name : formData.name,
        email : formData.email,
        phone : formData.phone,
        city : formData.city
    }
    setUserData([newData, ...userData]);
  }

// edit
const editData = (data) => {
    setEdit({
        Data : data, isEdit : true
    })
    navigate('/example');
}

// Update
const updateData = ({oldID, name , email, city, phone}) => {
    setUserData(
       userData.map(item => item.id === oldID ? {oldID : item.id, name : name , email : email, city : city, phone : phone} : item)
    )
    setEdit(
        {data : {}, isEdit : false}
    )
}

  return (
    <>
    <div className='mainContainer container-fluied bg-warning-subtle'>
      <Navbar/>
      <main className='subContainer container-fluied'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/document' element={<Document/>}/>
          <Route path='/example' element={<Example saveData={saveData} edit={edit} updateData={updateData}/>}/>
          <Route path='/table' element={<Table userData={userData} deleteData={deleteData} editData={editData}/>}/>
        </Routes>
      </main>
    </div>
    </>
  )
}

export default IndexFile