import React from 'react';
import PropTypes from 'prop-types';
import styles from './Month.module.scss';
import { eachWeekOfInterval, startOfMonth, endOfMonth, format } from 'date-fns';
import Week from '../Week';

function Month(props) {
  const { currentDate } = props;
  const weeksOfMonth = eachWeekOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });
  return (
    <table>
      <caption className={styles.rightBlock__title}>
        <span>{format(currentDate, 'MMMM')}</span>
        <span>{format(currentDate, 'Y')}</span>
      </caption>
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
      {weeksOfMonth.map((week, i) => {
        return (
          <tbody>
            <Week startOfWeek={weeksOfMonth[i]} currentDate={currentDate} />
          </tbody>
        );
      })}
    </table>
  );
}

Month.propTypes = {};

export default Month;
