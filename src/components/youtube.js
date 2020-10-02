import React from "react";
import { useFormik } from "formik";
import "../youtube.css";
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("formik values", formik.values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "required";
      }
      if (!values.email) {
        errors.email = "required";
      }
      if (!values.channel) {
        errors.channel = "required";
      }
      return errors;
    },
  });
  console.log("formik errors", formik.errors);
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? <small>{formik.errors.name}</small> : null}
        </div>
        <div>
          {" "}
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <small>{formik.errors.email}</small> : null}
        </div>
        <div>
          <label htmlFor="name">Channel </label>
          <br />
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <small>{formik.errors.channel}</small>
          ) : null}
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
