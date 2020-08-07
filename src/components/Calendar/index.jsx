import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import styles from './Calendar.module.scss';
import Month from './Month';

const Calendar = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { currentDate } = props;

  return (
    <article className={styles.contentContainer}>
      <section className={styles.leftBlock}>
        <span className={styles.leftBlock__title}>{format(selectedDate, 'EEEE')}</span>
        <span className={styles.leftBlock__content}>{format(selectedDate, 'd')}</span>
      </section>
      <section className={styles.rightBlock}>
        {
          <Month
            date={currentDate}
            currentDate={currentDate}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        }
      </section>
    </article>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};

Calendar.defaultProps = {
  currentDate: new Date(),
};

export default Calendar;
