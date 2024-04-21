import React from 'react';

const InputField = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div
      className={
        formik.touched[name] && formik.errors[name] && 'error'
      }
    >
      <label>{label}</label>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={name}
        className="form-control mt-2"
        type={type}
      />
      <span>{formik.errors[name]}.</span>
    </div>
  );
};

export default InputField;