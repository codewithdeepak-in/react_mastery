import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';



const App = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .min(5, 'Atleast 5 character is required')
        .required('Required')
    }),
    onSubmit: (values) => {
      // The second argument to onSubmit provides access to form helpers like resetForm.
      console.log(values);
      // You can reset the form after submission if needed
    },
  });

  return (
    <>
      <div>funwithformik</div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="fname"
          value={formik.values.fname}
          onChange={formik.handleChange}
        />
        {formik.errors.fname ? <div>{formik.errors.fname}</div> : null}
        <input
          type="text"
          name="lname"
          value={formik.values.lname}
          onChange={formik.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
