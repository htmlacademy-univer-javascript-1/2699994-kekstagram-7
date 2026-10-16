const parseTimeToMinute = function(time) {
  time = time.split(':');
  const hours = parseInt(time[0], 10);
  const minute = parseInt(time[1], 10);

  return (hours * 60) + minute;
};

const IsMeetingInWorkday = function(start, end, meeting, duration) {

  const durMeet = parseTimeToMinute(meeting) + duration;
  const startMinute = parseTimeToMinute(start);
  const endMinute = parseTimeToMinute(end);

  return (durMeet >= startMinute && durMeet <= endMinute);
};

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


