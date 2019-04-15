import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

//validation
const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = 'Required';
  } else if (values.fname.length > 15) {
    errors.fname = 'Must be 15 characters or less';
  } else if (!values.lname) {
    errors.lname = 'Required';
  } else if (values.lname.length > 15) {
    errors.lname = 'Must be 15 characters or less';
  } else if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        style={{border: touched && error ? 'red 2px solid' : 'none'}}
      />
      <div style={{color: 'red'}}>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  </div>
);

let ContactForm = props => {
  const {handleSubmit} = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="formContainer"
      style={{display: 'flex', flexFlow: 'column nowrap'}}>
      <label htmlFor="lfname">First Name:</label>
      <Field type="text" name="fname" component={renderField} id="lfname" />
      <label htmlFor="lsname">Last Name:</label>
      <Field type="text" name="lname" component={renderField} id="lsname" />
      <label htmlFor="lemail">Email:</label>
      <Field type="text" name="email" component={renderField} id="lemail" />
      <button
        type="submit"
        style={{width: '100px', position: 'relative', left: '50%'}}>
        Submit
      </button>
    </form>
  );
};

ContactForm = reduxForm({form: 'contact', validate})(ContactForm);

export default ContactForm;
