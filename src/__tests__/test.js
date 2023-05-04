import Validator from '../Validator';

describe('Validator', () => {
  it('допустимое имя пользователя', () => {
    const userName = 'my_username_123';
    expect(Validator.validateUsername(userName)).toBe(true);
  });

  it('недопустимое имя пользователя (содержит пробелы)', () => {
    const userName = 'my username';
    expect(() => Validator.validateUsername(userName)).toThrow('Ошибка! Имя должно содержать только латинские буквы, цифры, знаки _ и -!');
  });

  it('недопустимое имя пользователя (начинается с цифры)', () => {
    const userName = '123username';
    expect(() => Validator.validateUsername(userName)).toThrow('Ошибка! Имя не должно иметь более трех цифр подряд и начинаться/заканчиваться с цифры или символов - и _!');
  });

  it('недопустимое имя пользователя (заканчивается символом подчеркивания)', () => {
    const userName = 'username_';
    expect(() => Validator.validateUsername(userName)).toThrow('Ошибка! Имя не должно иметь более трех цифр подряд и начинаться/заканчиваться с цифры или символов - и _!');
  });

  it('недопустимое имя пользователя (содержит более трех цифр подряд)', () => {
    const userName = 'my_username_1234';
    expect(() => Validator.validateUsername(userName)).toThrow('Ошибка! Имя не должно иметь более трех цифр подряд и начинаться/заканчиваться с цифры или символов - и _!');
  });
});
