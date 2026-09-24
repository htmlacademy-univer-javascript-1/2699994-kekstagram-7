function checkLength(stroka, maxLength) {
  return stroka.length <= maxLength;
}

function isPalindrom(stroka) {
  stroka = stroka.toLowerCase().replaceAll(' ', '');
  let end;
  for (let start = 0; start < Math.floor(stroka.length / 2); start++) {
    end = -(start + 1);
    if (stroka.at(start) !== stroka.at(end)) {
      return false;
    }
  }
  return true;
}

function returnNumbers(data) {
  const str = String(data);

  let digits = '';

  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      digits += str[i];
    }
  }

  if (digits === '') {
    return NaN;
  }
  return parseInt(digits, 10);
}


