// First Page
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';

let FormFirstPage = props => {
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
      <div className="formButtons">
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(FormFirstPage);
