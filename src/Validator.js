export default class Validator {
  static validateUsername(userName) {
    const exceptLatinLettersAndNumbersAndSigns = /^[a-zA-Z0-9_-]+$/;
    const exceptSpaces = /\s+/;
    const exceptThreeNumbersInRow = /\d{4,}/;
    const exceptEndingSymbolsAndNumbers = /^\d|[_-]$/;
    // Проверяем содержит ли имя только латинские буквы, цифры и знаки - и _
    // и не содержит пробелы
    if (!exceptLatinLettersAndNumbersAndSigns.test(userName) || exceptSpaces.test(userName)) {
      throw new Error('Ошибка! Имя должно содержать только латинские буквы, цифры, знаки _ и -!');
    }
    // Проверяем не содержит ли имя более трех цифр подряд,
    // и начинаться/заканчиваться с цифры или символов - и _
    if (exceptThreeNumbersInRow.test(userName) || exceptEndingSymbolsAndNumbers.test(userName)) {
      throw new Error('Ошибка! Имя не должно иметь более трех цифр подряд и начинаться/заканчиваться с цифры или символов - и _!');
    }
    return true;
  }
}
