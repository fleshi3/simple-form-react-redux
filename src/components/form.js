import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="lfname">First Name:</label>
      <Field type="text" name="fname" component="input" id="lfname" />
      <label htmlFor="lsname">Last Name:</label>
      <Field type="text" name="lname" component="input" id="lsname" />
      <label htmlFor="lemail">Email:</label>
      <Field type="text" name="email" component="input" id="lemail" />
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({form: 'contact'})(ContactForm);

export default ContactForm;
