const SUBMIT_FORM = 'SUBMIT_FORM';

export function submitForm(values) {
  return {
    type: 'SUBMIT_FORM',
    values,
  };
}
