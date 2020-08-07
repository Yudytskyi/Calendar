import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { format, isSameDay, isSameMonth } from 'date-fns';
import styles from './CalendarDate.module.scss';

function CalendarDate({ date, currentDate, className, setSelectedDate, selectedDate }) {
  const classNameStr = classNames(className, {
    [styles.currentDate]: isSameDay(date, currentDate),
    [styles.currentMonth]: isSameMonth(date, currentDate),
    [styles.selectedDate]: isSameDay(date, selectedDate),
  });

  return (
    <td onClick={() => setSelectedDate(date)} className={classNameStr}>
      {format(date, 'd')}
    </td>
  );
}

CalendarDate.propTypes = {
  date: PropTypes.object.isRequired,
  className: PropTypes.string,
};

CalendarDate.defaultProps = {
  className: styles.date,
};

export default CalendarDate;
