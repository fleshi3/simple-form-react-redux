// Second Page
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = ({meta: {touched, error}}) =>
  touched && error ? <div style={{color: "red"}}>{error}</div> : false;

let FormSecondPage = props => {
  const {handleSubmit, previousPage} = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="formContainer"
      style={{display: 'flex', flexFlow: 'column nowrap'}}>
      <label htmlFor="luname">Username:</label>
      <Field type="text" name="uname" component={renderField} id="luname" />
      <label htmlFor="lcountry">Country:</label>
      <Field type="text" name="country" component={renderField} id="lcountry" />
      <label>Sex:</label>
      <div className="formRadio">
        <label>
          <Field name="sex" component="input" type="radio" value="male" />
          Male
        </label>
        <label>
          <Field name="sex" component="input" type="radio" value="female" />
          Female
        </label>
        <Field name="sex" component={renderError} className="formRadio2" />
      </div>
      <div className="formButtons">
        <button tyoe="button" className="previous" onClick={previousPage}>
          Previous
        </button>
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
})(FormSecondPage);
