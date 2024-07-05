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


import React from 'react';
import { Formik } from 'formik';

const Form = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ name : '', email : '', city : '', phone : ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}
                className='w-100 bg-primary form d-flex align-items-start flex-column px-5 py-4 justify-content-around'>
                    {/* <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /> */}
                    <input type="text"
                        placeholder='Enter Name Here'
                        className='font form-control py-3 px-3 rounded-0'
                        value={values.name}
                        onBlur={handleBlur}
                        name="name"
                        onChange={handleChange}
                    />
                    {errors.name && touched.name && errors.name}
                    {/* <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    /> */}
                    <input type="email" placeholder='Enter Email Here'
                        className='font form-control py-3 px-3 rounded-0'
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}

                    <input type="phone" placeholder='Enter Number Here' className='font form-control py-3 px-3 rounded-0'

                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}

                    />


                    {errors.phone && touched.phone && errors.phone}
                    <select id="" className='font form-control py-3 px-3 rounded-0'

                        name="city"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}

                    >
                        <option value="city">Select Your City</option>
                        <option value="Ratlam">Ratlam</option>
                        <option value="Indore">Indore</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                    </select>

                    {errors.city && touched.city && errors.city}

                    <span className='w-25 my-3 d-flex align-items-center justify-content-between'>
                        <button className='form-control py-3 px-3 rounded-0 fw-bold h2  d-flex align-items-center justify-content-center bg-secondary-subtle border-0'>
                            <h5>Reset</h5>
                        </button>
                        {/* <Link to={'/table'}> */}
                        <button className='form-control py-3 px-3 rounded-0 bg-success text-light fw-bold h2 d-flex align-items-center justify-content-center border-0'><h5>Submit</h5></button>
                        {/* </Link> */}
                    </span>


                </form>
            )}
        </Formik>
    </div>
);

export default Form;