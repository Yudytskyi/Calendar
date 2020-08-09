import React from 'react';
import PropTypes from 'prop-types';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';

import styles from './Month.module.scss';

function Month(props) {
  const {
    currentDate,
    setSelectedDate,
    classNameStr,
    isShow,
    isShow: { year, week, calendarDate },
    setIsShow,
  } = props;

  const daysOfWeek = [
    <p key="1">s</p>,
    <p key="2">m</p>,
    <p key="3">t</p>,
    <p key="4">w</p>,
    <p key="5">t</p>,
    <p key="6">f</p>,
    <p key="7">s</p>,
  ];

  const daysOfInterval = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentDate)),
    end: endOfWeek(endOfMonth(currentDate)),
  });

  return (
    <div className={styles.month}>
      <div
        className={styles.month__title}
        onDoubleClick={() => {
          setIsShow({ ...isShow, year: !year });
        }}
      >
        {format(currentDate, 'MMMM Y')}
      </div>
      <div>
        <div className={styles.content__title} onDoubleClick={() => setIsShow({ ...isShow, week: !week })}>
          {daysOfWeek}
        </div>
        <div className={styles.content} onDoubleClick={() => setIsShow({ ...isShow, calendarDate: !calendarDate })}>
          {daysOfInterval.map(dey => {
            return (
              <div key={format(dey, 'YYY-MMM-d')} onClick={() => setSelectedDate(dey)} className={classNameStr(dey)}>
                {format(dey, 'd')}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Month.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  setSelectedDate: PropTypes.func.isRequired,
  classNameStr: PropTypes.func.isRequired,
  isShow: PropTypes.object.isRequired,
  year: PropTypes.string,
  week: PropTypes.string,
  calendarDate: PropTypes.string,
  setIsShow: PropTypes.func.isRequired,
};

Month.defaultProps = {
  currentDate: new Date(),
};

export default Month;
