import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { format, getMonth } from 'date-fns';

function Day({ date, className }) {
  const numberOfDate = format(date, 'd');
  const modify = classNames({
    ' is-current': date.toDateString() === new Date().toDateString(),
    ' is-not-current-month': getMonth(date) != getMonth(new Date()),
  });

  return <div className={`${className}${modify}`}>{numberOfDate}</div>;
}

Day.propTypes = {
  date: PropTypes.object.isRequired,
  className: PropTypes.string,
};

Day.defaultProps = {
  className: 'item',
};

export default Day;
