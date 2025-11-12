const getDayOfWeek = (year, month, day) => {
  const date = new Date(year, month - 1, day);
  let dayOfWeek = date.getDay();
  
  return dayOfWeek === 0 ? 7 : dayOfWeek;
};

const getDaysInMonth = (year) => {
  const daysInMonth = [];
  for (let month = 1; month <= 12; month++) {
    const lastDay = new Date(year, month, 0).getDate();
    daysInMonth.push(lastDay);
  }
  return daysInMonth;
};

const generateMonthCalendar = (year, month) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfWeek = getDayOfWeek(year, month, 1);
  
  const calendar = [];
  let currentWeek = new Array(7).fill(0);
  
  let day = 1;
  for (let week = 0; week < 6; week++) {
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (week === 0 && dayOfWeek < firstDayOfWeek - 1) {
        currentWeek[dayOfWeek] = 0;
      } else if (day <= daysInMonth) {
        currentWeek[dayOfWeek] = day;
        day++;
      } else {
        currentWeek[dayOfWeek] = 0;
      }
    }
    calendar.push([...currentWeek]);
    if (day > daysInMonth) break;
  }
  
  return calendar;
};

export { getDayOfWeek, getDaysInMonth, generateMonthCalendar };
export default { getDayOfWeek, getDaysInMonth, generateMonthCalendar };