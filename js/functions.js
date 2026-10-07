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
