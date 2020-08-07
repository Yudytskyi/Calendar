import React from 'react';
import PropTypes from 'prop-types';
import { eachWeekOfInterval, startOfMonth, endOfMonth, format } from 'date-fns';

import styles from './Month.module.scss';
import Week from '../Week';

function Month(props) {
  const { date, currentDate, setSelectedDate, selectedDate } = props;
  const monthWeeks = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });
  return (
    <table>
      <caption className={styles.rightBlock__title}>{format(date, 'MMMM Y')}</caption>
      <thead className={styles.rightBlock__subtitle}>
        <tr>
          <th>s</th>
          <th>m</th>
          <th>t</th>
          <th>w</th>
          <th>t</th>
          <th>f</th>
          <th>s</th>
        </tr>
      </thead>
      <tbody>
        {monthWeeks.map((sun, i) => {
          return (
            <Week
              setSelectedDate={setSelectedDate}
              key={format(sun, 'YYY-I')}
              date={sun}
              currentDate={currentDate}
              selectedDate={selectedDate}
            />
          );
        })}
      </tbody>
    </table>
  );
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date),
  currentDate: PropTypes.instanceOf(Date),
};

Month.defaultProps = {
  date: new Date(),
  currentDate: new Date(),
};

export default Month;
