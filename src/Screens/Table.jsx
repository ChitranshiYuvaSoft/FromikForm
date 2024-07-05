import React from 'react'
import TableData from '../Components/TableData'

const Table = ({userData, deleteData, editData}) => {
  return (
    <div className='tableSec container-fluied d-flex align-items-center justify-content-center'>
    <div className="card conatiner border-0 shadow-sm w-75 d-flex align-items-center justify-content-center" >
          <div className="card-body container w-75 d-flex align-items-start justify-content-center flex-column">
               <h1 className='text-dark text-center display-3 fw-bold '><span className='text-success'>For</span>mik</h1>
               <div className='underline bg-dark container-fluied'></div>

               <div className='w-100 mainContent container-fluied mt-4 d-flex align-items-start justify-content-around flex-column '>
                 

               <table className="table">
  <thead className='table-dark'>
    <tr className='py-5'>
      {/* <th scope="col" className='h4 text-center'>Sr. No.</th> */}
      <th scope="col"  className='h4 text-center'>Name</th>
      <th scope="col"  className='h4 text-center'>Email</th>
      <th scope="col"  className='h4 text-center'>Phone</th>
      <th scope='col'  className='h4 text-center'>City</th>
      <th scope='col'  className='h4 text-center'>Action</th>
    </tr>
  </thead>
  <tbody className='py-4'>
   
   {
    userData.map((data, index )=> <TableData data={data} key={index} deleteData={deleteData} editData={editData}/>)
   }
  </tbody>
</table>
                


               </div>
              {/* <Link to="/document" className="btn btn-warning px-3 py-3 fw-bold display-1 mt-4 rounded-0"> */}
              {/* <h4>Go On Document</h4>
              </Link> */}
          </div>
  </div>
</div>
  )
}

export default Table