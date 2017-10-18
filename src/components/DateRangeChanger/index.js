import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import { connect } from "react-redux";
import { changeDateRange } from "../../AC";

class DateRangeChanger extends Component {
  handleDayClick = day => {
    const { changeDateRange, range } = this.props;

    changeDateRange(DateUtils.addDayToRange(day, range));
  };

  render() {
    const publishedArticles = this.props.articles.map(article => {
      return article.date;
    });

    const { from, to } = this.props.range;
    return (
      <div className="RangeExample">
        <DayPicker
          numberOfMonths={3}
          selectedDays={[
            ...publishedArticles,
            day => DateUtils.isDayInRange(day, { from, to })
          ]}
          onDayClick={this.handleDayClick}
          fixedWeeks
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return { articles: state.articles, range: state.filters.dateRange };
  },
  { changeDateRange }
)(DateRangeChanger);
