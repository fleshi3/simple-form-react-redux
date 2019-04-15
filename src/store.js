import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import simpleForm from './reducers/forms';

const rootReducer = combineReducers({
  form: formReducer,
  simpleForm,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
