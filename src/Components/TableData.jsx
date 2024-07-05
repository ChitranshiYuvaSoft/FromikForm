import React from 'react'

const TableData = ({data, index, deleteData, editData}) => {

    const {id, name , email, phone , city} = data;

  return (
    <tr className='my-2 '>
      {/* <th scope="row"  className='h5 pt-3 text-center'>{index}</th> */}
      <td className='h5 pt-3 text-center'>{name}</td>
      <td  className='h5 pt-3 text-center'>{email}</td>
      <td  className='h5 pt-3 text-center'>{phone}</td>
      <td  className='h5 pt-3 text-center'>{city}</td>
      <td className='h5 pt-3 text-center'>
        <button className='bg-warning text-light border-0 px-2 py-2'  onClick={() =>editData(data)}>Edit</button>
        <button  className='bg-danger text-light border-0 px-2 py-2'  onClick={()=>deleteData(data.id)}>Delete</button>
      </td>
    </tr>
  )
}

export default TableData