export const isRequired = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'This field is required';
  }
  return '';
};

export const validateFields = {
  name: value => isRequired(value),
};

export const validateForm = (form) => {
  const errors = [];
  for (var property in form) {
    if (form.hasOwnProperty(property)) {
      const resultByField = validateFields[property](form[property], form);
      if (resultByField) {
        errors.push(resultByField);
      }
    }
  }
  return errors.length === 0;
};
