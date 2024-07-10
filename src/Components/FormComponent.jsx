import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  city: Yup.string().required("City is required"),
});

const FormComponent = ({ saveData, edit }) => {
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
    

  // const initialValues = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   city: "",
  // };

  //   const handleSubmitting = (values, { setSubmitting }) => {
  //             setTimeout(() => {
  //             alert(JSON.stringify(values, null, 2));
  //             console.log(saveData(values),"FormData")
  //             console.log(values)
  //             setSubmitting(false);
  //             }, 400);
  //   };

//   useEffect(() => {
//     setInitialValues({
//       name: edit.Data.name,
//       email: edit.Data.email,
//       city: edit.Data.city,
//       phone: edit.Data.phone,
//     });
//   }, []);

useEffect(() => {
    if (edit && edit.Data) {
      setInitialValues({
        name: edit.Data.name,
        email: edit.Data.email,
        phone: edit.Data.phone,
        city: edit.Data.city,
      });
    }
  }, [edit]); // Update initialValues when edit prop changes


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={saveData}
    >
      {({ isSubmitting }) => (
        <Form className="w-100">
          <Field
            type="text"
            name="name"
            placeholder="Enter Name Here"
            className="form-control py-3 fw-bold rounded-0"
          />
          <ErrorMessage name="name" component="div" />

          <Field
            type="email"
            name="email"
            placeholder="Enter Email Here"
            className="form-control py-3  rounded-0 fw-bold"
          />
          <ErrorMessage name="email" component="div" />

          <Field
            type="number"
            name="phone"
            placeholder="Enter Phone Here"
            className="form-control rounded-0 py-3 fw-bold"
          />
          <ErrorMessage name="phone" component="div" />

          <Field
            type="text"
            name="city"
            placeholder="Enter City Here"
            className="form-control rounded-0 py-3 fw-bold"
          />
          <ErrorMessage name="city" component="div" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="form-control py-3 mt-3 rounded-0 fw-bold btn btn-warning"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
