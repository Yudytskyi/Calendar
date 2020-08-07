import React from 'react';
import PropTypes from 'prop-types';
import CalendarDate from '../CalendarDate';
import { startOfWeek, addDays, format } from 'date-fns';

const getWeekDates = ({ date, currentDate, setSelectedDate, selectedDate }) => {
  const weekDays = [];
  const start = startOfWeek(date);
  for (let i = 0; i < 7; ++i) {
    const dayDate = addDays(start, i);
    weekDays.push(
      <CalendarDate
        key={format(dayDate, 'yyy-MM-dd')}
        date={dayDate}
        currentDate={currentDate}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
    );
  }
  return weekDays;
};

function Week(props) {
  return <tr>{getWeekDates(props)}</tr>;
}

Week.propTypes = {
  date: PropTypes.instanceOf(Date),
  currentDate: PropTypes.instanceOf(Date),
};

Week.defaultProps = {
  date: new Date(),
  currentDate: new Date(),
};

export default Week;
