import React from 'react'
import Form from '../Components/Form';

const Example = ({saveData, edit, updateData}) => {


 
  return (
    <div className='exampleSec container-fluied d-flex align-items-center justify-content-center'>
                  <div className="card conatiner border-0 shadow-sm w-75 d-flex align-items-center justify-content-center" >
                        <div className="card-body container w-75 d-flex align-items-start justify-content-center flex-column">
                             <h1 className='text-dark text-center display-3 fw-bold '><span className='text-success'>For</span>mik Exmaple</h1>
                             <div className='underline bg-dark container-fluied'></div>

                             <div className='mainContent w-100 container-fluied mt-4 d-flex align-items-start justify-content-around flex-column '>
                                <h3>Example Here....</h3>
                                <div className='w-100 exampleContent d-flex align-items-center justify-content-center'>
                                 <Form saveData={saveData} edit={edit} updateData={updateData}/>
                                </div>
                             </div>
                            {/* <Link to="/document" className="btn btn-warning px-3 py-3 fw-bold display-1 mt-4 rounded-0"> */}
                            {/* <h4>Go On Document</h4>
                            </Link> */}
                        </div>
                </div>
    </div>
  )
}

export default Example