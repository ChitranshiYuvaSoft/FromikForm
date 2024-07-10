// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';


// const Form = ({ saveData, edit, updateData }) => {

//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         city: "",
//         phone: ""
//         ,
//     });

//     const { name, email, phone, city } = formData;

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (edit.isEdit) {
//             updateData({
//                 oldID: edit.Data.id,
//                 name,
//                 email,
//                 city,
//                 phone
//             })
//         } else {
//             saveData(formData)
//         }
//         navigate('/table')
//     }


//     useEffect(() => {
//         setFormData(
//             {
//                 name: edit.Data.name,
//                 email: edit.Data.email,
//                 city: edit.Data.city,
//                 phone: edit.Data.phone
//             }
//         )
//     }, [edit])

//     return (
//         <form action="" className='w-100 form d-flex align-items-start flex-column px-5 py-4 justify-content-around'
//             onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter Name Here'
//                 className='font form-control py-3 px-3 rounded-0'
//                 value={name}
//                 name="name"
//                 onChange={handleChange}
//             />
//             <input type="email" placeholder='Enter Email Here'
//                 className='font form-control py-3 px-3 rounded-0'
//                 value={email}
//                 name="email"
//                 onChange={handleChange}
//             />
//             <input type="phone" placeholder='Enter Number Here' className='font form-control py-3 px-3 rounded-0'
//                 value={phone}
//                 name="phone"
//                 onChange={handleChange}
//             />
//             <select id="" className='font form-control py-3 px-3 rounded-0'
//                 value={city}
//                 name="city"
//                 onChange={handleChange}>
//                 <option value="city">Select Your City</option>
//                 <option value="Ratlam">Ratlam</option>
//                 <option value="Indore">Indore</option>
//                 <option value="Bhopal">Bhopal</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Delhi">Delhi</option>
//             </select>
//             <span className='w-25 my-3 d-flex align-items-center justify-content-between'>
//                 <button className='form-control py-3 px-3 rounded-0 fw-bold h2  d-flex align-items-center justify-content-center bg-secondary-subtle border-0'>
//                     <h5>Reset</h5>
//                 </button>
//                 {/* <Link to={'/table'}> */}
//                 <button className='form-control py-3 px-3 rounded-0 bg-success text-light fw-bold h2 d-flex align-items-center justify-content-center border-0'><h5>Submit</h5></button>
//                 {/* </Link> */}
//             </span>

//         </form>
//     )
// }

// export default Form


