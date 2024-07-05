import React from 'react'
import { Link } from 'react-router-dom'

const Document = () => {
  return (
    <div className='doumentSec container-fluied d-flex align-items-center justify-content-center'>
                  <div className="card conatiner border-0 shadow-sm w-75 d-flex align-items-center justify-content-center" >
                        <div className="card-body container w-75 d-flex align-items-start justify-content-center flex-column">
                             <h1 className='text-dark text-center display-3 fw-bold '><span className='text-success'>For</span>mik</h1>
                             <div className='underline bg-dark container-fluied'></div>

                             <div className='mainContent container-fluied mt-4 d-flex align-items-start justify-content-around flex-column '>
                                <h3>Formic is a small library. It help is 3 most parts.</h3>
                                <ol className=''>
                                    <li className='border px-4 py-3 rounded-0 h5'> Getting value in and out of form state</li>
                                    <li  className='border px-4 py-3 rounded-0 h5'>Validation and Error Message</li>
                                    <li  className='border px-4 py-3 rounded-0 h5'>Handling form submission
                                    </li>
                                </ol>

                                <h4>Formik is compatible with React v15+ and works with ReactDOM and React Native.</h4>

                                <h4 className=''>Formik will keep things organized making testing, refactoring and reasoning about your form breeze.</h4>

                                <ul className=''>
                                    <li className='border px-4 py-3 rounded-0 h5'> Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB)</li>
                                    <li className='border px-4 py-3 rounded-0 h5'>Redux-Form calls your entire top-level Redux reducer multiple times ON EVERY SINGLE KEYSTROKE. This is fine for small 
   apps, but as your Redux app grows, input latency will continue to increase if you use Redux-Form.
</li>
                                    <li className='border px-4 py-3 rounded-0 h5 text-danger fw-bold'>Redux-Form is 22.5 kB minified gzipped (Formik is 12.7 kB)
                                    </li>
                                </ul>

                                <h4>Formik is compatible with React v15+ and works with ReactDOM and React Native.</h4>

                                <h3 className='mt-3 pb-5'><span className='text-warning fw-bold'>UNPKG : </span><h4>
                                npkg is a fast global content delivery network for everything on npm. Use it to quickly and easily load any file from 
any package using a URL like
<span className='text-danger'>    unpkg.com/:package@:version/:file</span>
                                </h4>
</h3>
                             </div>
                            {/* <Link to="/document" className="btn btn-warning px-3 py-3 fw-bold display-1 mt-4 rounded-0"> */}
                            {/* <h4>Go On Document</h4>
                            </Link> */}
                        </div>
                </div>
    </div>
  )
}

export default Document