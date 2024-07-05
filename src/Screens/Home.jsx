import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='homeSec container-fluied d-flex align-items-center justify-content-center'>
            <div className='homeSubSec container d-flex align-items-center justify-content-center'>
                <div className="card conatiner border-0 shadow-sm w-75 d-flex align-items-center justify-content-center" >
                        <div className="card-body container w-75 d-flex align-items-start justify-content-center flex-column">
                             <h1>Welcome To Formik, Learn New Library & Enjoy Your Day!!</h1>
                            <Link to="/document" className="btn btn-warning px-3 py-3 fw-bold display-1 mt-4 rounded-0">
                            <h4>Go On Document</h4>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home