const validate2 = values => {
  const errors = {};
  if (values.uname.length > 15) {
    errors.uname = 'Username exceeds character limit';
  } else if (!values.uname) {
    errors.uname = 'Required';
  }
  return errors;
};

export default validate2;
