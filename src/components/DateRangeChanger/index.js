import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import { connect } from "react-redux";
import { changeDateRangeArticles } from "../../AC";

class DateRangeChanger extends Component {
  state = {
    from: null,
    to: null
  };
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.props.changeDateRangeArticles(range);
  };
  handleResetClick = e => {
    e.preventDefault();
    let resetRange = {
      from: null,
      to: null
    };
    this.setState(resetRange);
    this.props.changeDateRangeArticles(resetRange);
  };
  render() {
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        {!from &&
          !to && (
            <p>
              Please select the <strong>first day</strong>.
            </p>
          )}
        {from &&
          !to && (
            <p>
              Please select the <strong>last day</strong>.
            </p>
          )}
        {from &&
          to && (
            <p>
              You chose from {moment(from).format("L")} to{" "}
              {moment(to).format("L")}
              .{" "}
              <a href="." onClick={this.handleResetClick}>
                Reset
              </a>
            </p>
          )}
        <DayPicker
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
    );
  }
}

export default connect(null, { changeDateRangeArticles })(DateRangeChanger);
