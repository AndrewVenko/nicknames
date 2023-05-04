export default class Validator {
  static validateUsername(userName) {
    const reg = /^[a-zA-Z0-9_-]+$/;
    // Проверяем сответствует ли имя условию первому
    if (!reg.test(userName) || /\s+/.test(userName)) {
      throw new Error('Ошибка! Имя должно содержать только латинские буквы, цифры, знаки _ и -!');
    }
    // Проверяем сответствует ли имя условию второму
    if (/\d{4,}/.test(userName) || /^\d|[_-]$/.test(userName)) {
      throw new Error('Ошибка! Имя не должно иметь более трех цифр подряд и начинаться/заканчиваться с цифры или символов - и _!');
    }
    return true;
  }
}
