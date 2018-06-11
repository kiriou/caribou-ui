export const isRequired = (value) => {
  if (value === null || value === undefined || value === '') {
    return 'This field is required';
  }
  return '';
};

export const validateNewPassword = (value, form) => {
  const valueIsRequired = isRequired(value);
  if (valueIsRequired !== '') {
    return valueIsRequired;
  }
  if (value !== form.newPassword) {
    return 'These two fields should be equals';
  }
  return '';
};

export const validateFields = {
  firstname: value => isRequired(value),
  lastname: value => isRequired(value),
  email: value => isRequired(value),
  phoneNumber: value => isRequired(value),
  firstLine: () => '',
  secondLine: () => '',
  thirdLine: () => '',
  oldPassword: value => isRequired(value),
  newPassword: value => isRequired(value),
  confirmNewPassword: (value, form) => validateNewPassword(value, form),
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
