import React, { Component } from "react";
import "./styles.scss";

import LeftBlock from "../LeftBlock";
import RightBlock from "../RightBlock";

export class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      currentDate: new Date(),
      firstWickDay: 0,
      amountOfDays: 31,
      currentMonth: [],
    };
  }

  componentDidMount() {
    const { amountOfDays } = this.state;
    const newMonth = [];
    const strDate = `${
      this.state.currentDate.getMonth() + 1
    }.01.${this.state.currentDate.getFullYear()}`;
    const firstDayOfWeek = new Date(strDate);

    for (let i = 2 - firstDayOfWeek.getDay(); i <= amountOfDays; i++) {
      newMonth.push(i);
    }
    this.setState({ currentMonth: newMonth });
  }

  onClick = (e) => {
    if (e.target.id > 0) {
      this.setState({ id: e.target.id });
      document.getElementById(e.target.id).classList.add("active");
      if (this.state.id) {
        document.getElementById(this.state.id).removeAttribute("class");
        document
          .getElementById(this.state.id)
          .setAttribute("class", "content-table__item");
      }
    }
  };

  render() {
    return (
      <div className="content-container">
        <LeftBlock />
        <RightBlock
          currentMonth={this.state.currentMonth}
          onClick={this.onClick}
          currentDate={this.state.currentDate}
        />
      </div>
    );
  }
}
