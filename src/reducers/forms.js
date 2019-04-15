const initialState = {
  submittedForms: [],
};

const simpleForm = (state = initialState.submittedForms, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return [...state, action.values];
    default:
      return state;
  }
};

export default simpleForm;
