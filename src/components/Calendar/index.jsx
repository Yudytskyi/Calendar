import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { eachWeekOfInterval, startOfMonth, endOfMonth, format } from 'date-fns';
import styles from './Calendar.module.scss';
import Day from '../Day';
import Month from '../Month';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    return (
      <article className={styles.contentContainer}>
        <div className={styles.leftBlock}>
          <span className={styles.leftBlock__title}>{format(this.state.currentDate, 'EEEE')}</span>
          <span className={styles.leftBlock__content}>{format(this.state.currentDate, 'd')}</span>
        </div>
        <div className={styles.rightBlock}>{<Month currentDate={this.state.currentDate} />}</div>
      </article>
    );
  }
}

export default Calendar;
