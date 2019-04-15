// Third Page
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const pets = ['None', 'Dog', 'Cat', 'Fish', 'Rabbit', 'Bird', 'Snake'];

const renderPetSelector = ({input, meta: {touched, error}}) => (
  <div className="selectContainer">
    <select {...input}>
      <option value="">Select your pet</option>
      {pets.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <div style={{color: "red"}}>{error}</div>}
  </div>
);

let FormThirdPage = props => {
  const {handleSubmit, previousPage, pristine, submitting} = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="formContainer"
      style={{display: 'flex', flexFlow: 'column nowrap'}}>
      <div>
        <label htmlFor="lpets">Pets:</label>
        <Field
          type="text"
          name="pets"
          component={renderPetSelector}
          id="lpets"
        />
      </div>
      <div className="formCheckbox">
        <div>
          <label htmlFor="lsingle">Single:</label>
        </div>
        <Field type="checkbox" name="single" component="input" id="pets" />
      </div>
      <div className="formTextContainer">
        <label htmlFor="lnotes">Notes:</label>
        <div className="formTextArea">
          <Field
            type="textarea"
            name="notes"
            component="textarea"
            id="lnotes"
            placeholder="tell us about yourself..."
          />
        </div>
      </div>
      <div className="formButtons">
        <button tyoe="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
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
})(FormThirdPage);
