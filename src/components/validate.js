// validate.js
const validate = values => {
  const errors = {};
  if (!values.fname) {
    errors.fname = '*Required';
  } else if (values.fname.length > 15) {
    errors.fname = '*Must be 15 characters or less';
  }
  if (!values.lname) {
    errors.lname = '*Required';
  } else if (values.lname.length > 15) {
    errors.lname = '*Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '*Invalid email address';
  }
  if (!values.uname) {
    errors.uname = '*Required';
  } else if (values.uname.length > 15) {
    errors.uname = '*Username exceeds character limit';
  }
  if (!values.country) {
    errors.country = '*Required';
  } else if (values.country.length > 20) {
    errors.country = '*Must be 20 characters or less';
  }
  if (!values.sex) {
    errors.sex = '*Please select your gender';
  }
  if (!values.pets) {
    errors.pets = '*Please select from the available options';
  }
  return errors;
};
export default validate;
