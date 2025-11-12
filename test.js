import { getDayOfWeek, getDaysInMonth, generateMonthCalendar } from './index.js';

const testGetDayOfWeek = () => {
  console.log('Testing getDayOfWeek:');
  console.log('2023-01-01 (星期日):', getDayOfWeek(2023, 1, 1));
  console.log('2023-01-02 (星期一):', getDayOfWeek(2023, 1, 2));
  console.log('2023-01-06 (星期五):', getDayOfWeek(2023, 1, 6));
  console.log('2023-01-07 (星期六):', getDayOfWeek(2023, 1, 7));
};

const testGetDaysInMonth = () => {
  console.log('Testing getDaysInMonth:');
  console.log('2023年 (平年):', getDaysInMonth(2023));
  console.log('2020年 (闰年):', getDaysInMonth(2020));
  console.log('2024年 (闰年):', getDaysInMonth(2024));
  console.log('1900年 (平年):', getDaysInMonth(1900));
  console.log('2000年 (闰年):', getDaysInMonth(2000));
};

const testGenerateMonthCalendar = () => {
  console.log('Testing generateMonthCalendar:');
  console.log('2023年1月:');
  console.log(generateMonthCalendar(2023, 1));
  console.log('2023年2月:');
  console.log(generateMonthCalendar(2023, 2));
  console.log('2020年2月 (闰年):');
  console.log(generateMonthCalendar(2020, 2));
  console.log('2023年12月:');
  console.log(generateMonthCalendar(2023, 12));
};

testGetDayOfWeek();
testGetDaysInMonth();
testGenerateMonthCalendar();