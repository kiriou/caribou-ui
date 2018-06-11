import * as helper from '../helper';

describe('isRequired', () => {
  test('isRequired - null input', () => {
    expect(helper.isRequired(null)).toEqual('This field is required');
  });

  test('isRequired - undefined input', () => {
    expect(helper.isRequired(undefined)).toEqual('This field is required');
  });

  test('isRequired - empty string input', () => {
    expect(helper.isRequired('')).toEqual('This field is required');
  });

  test('isRequired - not empty string input', () => {
    expect(helper.isRequired('aaa')).toEqual('');
  });

  test('isRequired - number input', () => {
    expect(helper.isRequired(3)).toEqual('');
  });

  test('isRequired - boolean input', () => {
    expect(helper.isRequired(false)).toEqual('');
  });
});

describe('validateNewPassword', () => {
  test('validateNewPassword - null value', () => {
    expect(helper.validateNewPassword(null, {})).toEqual('This field is required');
  });

  test('validateNewPassword - undefined value', () => {
    expect(helper.validateNewPassword(undefined, {})).toEqual('This field is required');
  });

  test('validateNewPassword - empty string value', () => {
    expect(helper.validateNewPassword('', {})).toEqual('This field is required');
  });

  test('validateNewPassword - not empty value - not equals to new password field', () => {
    const form = {
      newPassword: 'AAA',
    };
    expect(helper.validateNewPassword('BBB', form)).toEqual('These two fields should be equals');
  });

  test('validateNewPassword - not empty value - equals to new password field', () => {
    const form = {
      newPassword: 'AAA',
    };
    expect(helper.validateNewPassword('AAA', form)).toEqual('');
  });
});

describe('validateFields', () => {
  test('validateFields - firstname - is valid', () => {
    expect(helper.validateFields.firstname('AAA')).toEqual('');
  });
  test('validateFields - firstname - is not valid', () => {
    expect(helper.validateFields.firstname('')).toEqual('This field is required');
  });
  test('validateFields - lastname - is valid', () => {
    expect(helper.validateFields.lastname('AAA')).toEqual('');
  });
  test('validateFields - lastname - is not valid', () => {
    expect(helper.validateFields.lastname('')).toEqual('This field is required');
  });
  test('validateFields - email - is valid', () => {
    expect(helper.validateFields.email('AAA')).toEqual('');
  });
  test('validateFields - email - is not valid', () => {
    expect(helper.validateFields.email('')).toEqual('This field is required');
  });
  test('validateFields - phoneNumber - is valid', () => {
    expect(helper.validateFields.phoneNumber('AAA')).toEqual('');
  });
  test('validateFields - phoneNumber - is not valid', () => {
    expect(helper.validateFields.phoneNumber('')).toEqual('This field is required');
  });
  test('validateFields - firstLine', () => {
    expect(helper.validateFields.firstLine(null)).toEqual('');
  });
  test('validateFields - secondLine', () => {
    expect(helper.validateFields.secondLine(null)).toEqual('');
  });
  test('validateFields - thirdLine', () => {
    expect(helper.validateFields.thirdLine(null)).toEqual('');
  });
  test('validateFields - oldPassword - is valid', () => {
    expect(helper.validateFields.oldPassword('AAA')).toEqual('');
  });
  test('validateFields - oldPassword - is not valid', () => {
    expect(helper.validateFields.oldPassword('')).toEqual('This field is required');
  });
  test('validateFields - newPassword - is valid', () => {
    expect(helper.validateFields.newPassword('AAA')).toEqual('');
  });
  test('validateFields - newPassword - is not valid', () => {
    expect(helper.validateFields.newPassword('')).toEqual('This field is required');
  });
  test('validateFields - confirmNewPassword - is valid', () => {
    expect(helper.validateFields.confirmNewPassword('AAA', {newPassword: 'AAA'})).toEqual('');
  });
  test('validateFields - confirmNewPassword - is not valid', () => {
    expect(helper.validateFields.confirmNewPassword('', {newPassword: 'AAA'})).toEqual('This field is required');
  });
});

describe('validateForm', () => {
  test('validateForm - form is valid', () => {
    const form = {
      firstname: 'aaa',
      lastname: 'AAA',
      email: 'bbb',
      phoneNumber: 'ccc',
      firstLine: '',
      secondLine: '',
      thirdLine: '',
      oldPassword: 'ddd',
      newPassword: 'eee',
      confirmNewPassword: 'eee',
    }
    expect(helper.validateForm(form)).toEqual(true);
  });
  test('validateForm - form is not valid', () => {
    const form = {
      firstname: 'aaa',
      lastname: 'AAA',
      email: 'bbb',
      phoneNumber: 'ccc',
      firstLine: '',
      secondLine: '',
      thirdLine: '',
      oldPassword: 'ddd',
      newPassword: 'edee',
      confirmNewPassword: 'eee',
    }
    expect(helper.validateForm(form)).toEqual(false);
  });
});