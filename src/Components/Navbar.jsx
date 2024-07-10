import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar container-fluied py-2 shadow-sm px-4 bg-warning d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-start justity-content-center'>
        <Link to={'/'} className='text-decoration-none'>
        <h1 className='h1 fw-bold px-5 display-4 text-dark'><span className='text-success'>Formik</span>Form</h1>
        </Link>
        </div>
        <div className='w-25 d-flex align-items-center justify-content-between'>
          <ul className='w-100 list-group d-flex flex-row justify-content-around align-items-center'>
            <Link to={'/document'} className='text-decoration-none text-dark'>
            <li className='list-group-items fw-bold h3'>Documentation</li>
            </Link>
            <Link to={'/example'} className='text-decoration-none text-dark'>
            <li className='list-group-items fw-bold h3'>Example</li>
            </Link>
            <Link to={'/table'} className='text-decoration-none text-dark'>
            <li className='list-group-items fw-bold h3'>UserData</li>
            </Link>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar