import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";
import { connect } from "react-redux";
import { changeDateRange } from "../../AC";
import { mapToArray } from "../../utils";

/**
 * Компонент фильтра выбора диапазона дат
 */
class DateRangeChanger extends Component {
  /**
   * render
   * @return {ReactElement} разметка
   */
  render() {
    const publishedArticles = this.props.articles.map(article => {
      return new Date(article.date);
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

  /**
   * Колбэк клипа по дате, устанавливает диапазон
   * @param  {[type]} day [description]
   * @return {[type]}     [description]
   */
  handleDayClick = day => {
    const { changeDateRange, range } = this.props;
    changeDateRange(DateUtils.addDayToRange(day, range));
  };
}

export default connect(
  state => {
    return {
      articles: mapToArray(state.articles.allArticles),
      range: state.filters.dateRange
    };
  },
  { changeDateRange }
)(DateRangeChanger);
