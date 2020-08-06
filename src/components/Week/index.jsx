import React from 'react';
import PropTypes from 'prop-types';
import style from '../Month/Month.module.scss';
import Day from '../Day';
import { add } from 'date-fns';

function Week({ startOfWeek, currentDate }) {
  const daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    daysOfWeek.push(add(startOfWeek, { days: 1 }));
  }

  return (
    <tr>
      {daysOfWeek.map((day, i) => {
        return (
          <td>
            <Day
              key={`${day}${i}`}
              date={add(day, { days: i })}
              currentDate={currentDate}
              className={`${style.rightBlock__item}`}
            />
          </td>
        );
      })}
    </tr>
  );
}

Week.propTypes = {};

export default Week;
