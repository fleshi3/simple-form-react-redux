import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitForm} from './actions/index';
import ContactForm from './components/form';
import FormFirstPage from './components/formFirstPage';
import FormSecondPage from './components/formSecondPage';
import FormThirdPage from './components/formThirdPage';
import './App.scss';

// present submitted forms
const mapStateToProps = state => {
  return {
    simpleForm: state.simpleForm,
    wizard: state.form.wizard,
  };
};

// submit values to state array
const mapDispatchToProps = (dispatch, values) => {
  return {
    submitForm: values => dispatch(submitForm(values)),
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
      submitted: false,
    };
  }
  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  previousPage() {
    this.setState({page: this.state.page - 1});
  }

  showForm = simpleForm => {
    const {
      fname,
      lname,
      email,
      uname,
      country,
      sex,
      pets,
      single,
      notes,
    } = simpleForm;
    return (
      <div className="dataContainer">
        <div>
          <span>name:</span> {fname} &emsp; <span>surname:</span> {lname}
        </div>
        <div>
          <span>email:</span> {email}
        </div>
        <div>
          <span>username:</span> {uname}{' '}
        </div>
        <div>
          <span>country:</span>
          {country}
        </div>
        <div>
          <span>sex:</span>
          {sex}
        </div>
        <div>
          <span>pets:</span>
          {pets}
        </div>
        <div>
          <span>single:</span>
          {single ? 'TRUE' : 'FALSE'}
        </div>
        <div>
          <span>notes:</span>
          {notes}
        </div>
      </div>
    );
  };

  render() {
    const {submitForm, simpleForm} = this.props;
    const submittedForms = simpleForm.map(this.showForm);
    const {page} = this.state;
    return (
      <div className="App" style={{padding: '2rem'}}>
        <div className="formTitle">Simple React/Redux Form</div>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <FormThirdPage
            previousPage={this.previousPage}
            onSubmit={submitForm}
          />
        )}
        <div className="dataTitle">
          awaiting form data
          <span>.</span>
          <span>.</span>
          <span>.</span>
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
