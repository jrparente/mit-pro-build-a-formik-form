import { useFormik } from "formik";
import React from "react";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (Object.keys(formik.errors).length === 0) {
        console.log(values);
        alert("Login Successful");
        resetForm();
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email format";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },
  });

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-item">
          <label htmlFor="emailField">Email</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error" id="emailError">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="form-item">
          <label htmlFor="pswField">Password</label>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="error" id="pswError">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
        <div className="form-item">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <button className="submit-button" id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
