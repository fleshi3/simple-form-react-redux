import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitForm} from './actions/index';
import ContactForm from './components/form';
import './App.css';

// present submitted forms
const mapStateToProps = state => {
  return {
    simpleForm: state.simpleForm,
    form: state.form,
  };
};

// submit values to state array
const mapDispatchToProps = (dispatch, values) => {
  return {
    submitForm: values => dispatch(submitForm(values)),
  };
};

class App extends Component {
  showForm = simpleForm => {
    const {fname, lname, email} = simpleForm;
    return (
      <div>
        <div>FIRST NAME: {fname} &emsp; LASTNAME: {lname}</div>
        <div>EMAIL: {email}</div>
      </div>
    );
  };
  render() {
    const {submitForm, simpleForm} = this.props;
    const submittedForms = simpleForm.map(this.showForm);
    return (
      <div className="App" style={{padding: '2rem'}}>
        <div className="formTitle">
          <h2>Simple React Form</h2>
        </div>
        <ContactForm onSubmit={submitForm} />
        <div>
          <h2>Submitted Data</h2>
        </div>
        <div>{submittedForms}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
